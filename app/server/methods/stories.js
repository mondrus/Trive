/**
 * @Author: philip
 * @Date:   2017-05-31T08:52:16+00:00
 * @Filename: stories.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T09:55:07+00:00
 */



import { Meteor } from 'meteor/meteor';
import Stories from '/lib/collections/stories';

const likeStory = async (_id, likes) => {
  const id = Stories.findOne({ _id, likes });
  
  if (!id) {
    await Stories.update(_id, { $push: { likes } });
  } else {
    await Stories.update(_id, { $pull: { likes } });
  }
};

Meteor.methods({
  likeStory: async function (story) {
    if (this.userId) {
      const selector = { link: story.link, guid: story.guid };
      // find story with the specified selector
      const item = await Stories.findOne(selector, { fields: { _id: 1 } });
      
      if (item) {
        likeStory(item._id, this.userId);
      } else {
        const id = await Stories.insert(story, (error) => {
          if (error) {
            console.log(error);
            return;
          }
        });
        
        if (id) {
          likeStory(id, this.userId);
        }
      }
      
      return;
    }
    
    return;
  }
});
