/**
 * @Author: philip
 * @Date:   2017-05-27T00:19:43+00:00
 * @Filename: annotations.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-28T07:45:09+00:00
 */



import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import NewsStories from '/lib/collections/stories';
import Annotations from '/lib/collections/annotations';

const createAnnotation = async (userId, storyId, annotation) => {
  annotation.id = Random.id();

  const storyAnnotation = await Annotations.findOne({ storyId }, { fields: { id: 1 } });

  if (storyAnnotation) {
    await Annotations.update({ storyId }, {
      $push: {
        annotations: annotation
      }
    });
    // update and add annotated
  } else {
    const annotate = { storyId, annotations: [annotation] }
    const id = await Annotations.insert(annotate, (error) => {
      if (error) {
        console.log(error);
      }
    });
    return id;
  }
}

Meteor.methods({
  createStoryAnnotation: async function (story, annotation, user) {
    const selector = {
      link: story.link,
      guid: story.guid
    };
    // find story with the specified selector
    const newsStory = await NewsStories.findOne(selector, { fields: { _id: 1 } });
    
    if (newsStory) {
      // add new annotation to story
      createAnnotation(this.userId, newsStory._id, annotation);
    } else {
      // create a newsStory if sotry does not exist
      const storyId = await NewsStories.insert(story, (error) => {
        if (error) {
          console.log(error);
          return;
        }
      });
      
      if (storyId) {
        // add new annotation to story
        createAnnotation(this.userId, storyId, annotation);
      }      
    }
  },
  
  updateStoryAnnotation: function (story, annotation) {
    console.log('lsno.');
  },
  
  deleteStoryAnnotation: function (story, annotation) {
    console.log('lsno.');
  }
});
