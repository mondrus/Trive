/**
 * @Author: philip
 * @Date:   2017-05-27T21:52:31+00:00
 * @Filename: NewsRoomView.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T15:18:23+00:00
 */


import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import NewsRooms from '/lib/collections/newsRooms';
import NewsRoomView from '../pages/user/NewsRoomView.js';
import Loading from '../components/Loading.js';

const composer = ({ match: { params }, setTitle}, onData) => {
  const url = "http://rss.cnn.com/rss/edition.rss";

  Meteor.call('getRssArticles', [url], (err, articles) => {
    if (!err) {
      onData(null, { setTitle, ...params, articles });
      return;
    }
    onData(null, { setTitle, ...params });
  });
};

export default composeWithTracker(composer, Loading)(NewsRoomView);
