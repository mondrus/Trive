/**
 * @Author: philip
 * @Date:   2017-05-26T16:52:58+00:00
 * @Filename: newsRooms.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-26T17:15:29+00:00
 */


import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const NewsRoomsSchema = new SimpleSchema({
  web_uri: { type: String },
  title: { type: String },
});


const NewsRooms = new Meteor.Collection('news_rooms');

NewsRooms.attachSchema(NewsRoomsSchema);

export default NewsRooms;
