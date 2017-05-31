/**
 * @Author: philip
 * @Date:   2017-05-31T10:05:26+00:00
 * @Filename: story.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T10:06:51+00:00
 */



import { Meteor } from 'meteor/meteor';
import Stories from '/lib/collections/stories';

Meteor.publish('story.liked', function(argument){
  if (this.userId) {
    return Stories.find({ likes: this.userId });
  }
  return this.ready();
});
