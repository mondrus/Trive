/**
 * @Author: philip
 * @Date:   2017-05-27T00:40:31+00:00
 * @Filename: stories.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T09:30:05+00:00
 */


import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import Story from './Story';

const NewsStoriesSchema = new SimpleSchema({
  _id: { type: String },
  link: { type: String },
  guid: { type: String },
  meta: { type: Object },
  pubDate: { type: Object },
  likes: { type: [String], defaultValue: [] }
});


const NewsStories = new Mongo.Collection('news_stories', {
  transform: doc => new Story(doc)
});

// NewsStories.attachSchema(NewsStoriesSchema);

export default NewsStories;
