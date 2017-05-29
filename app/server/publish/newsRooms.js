/**
 * @Author: philip
 * @Date:   2017-05-26T12:52:00+00:00
 * @Filename: newsRooms.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T22:00:33+00:00
 */



import { Meteor } from 'meteor/meteor';
import NewsRooms from '/lib/collections/newsRooms';

Meteor.publish('newsRooms.all', function() {
  return NewsRooms.find();
});

Meteor.publish('newsRooms.getByTagName', function(tag){
  return NewsRooms.find({ tag });
});