/**
 * @Author: philip
 * @Date:   2017-05-27T13:46:57+00:00
 * @Filename: annotations.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T14:42:24+00:00
 */


import Annotations from '/lib/collections/annotations';
import NewsStories from '/lib/collections/stories';

Meteor.publish('annotations', function(story) {
  const selector = {
    link: story.link,
    guid: story.guid
  };
  const newsStory = NewsStories.findOne(selector, { fields: { _id: 1 } });
  
  if (newsStory) {
    return Annotations.find({ storyId: newsStory._id });
  }
  return this.ready();
});