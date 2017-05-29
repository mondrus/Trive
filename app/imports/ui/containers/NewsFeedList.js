/**
 * @Author: philip
 * @Date:   2017-05-27T22:16:22+00:00
 * @Filename: NewsFeedList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T22:59:04+00:00
 */


import React from 'react';
import { composeWithTracker } from 'react-komposer';
import NewsRooms from '/lib/collections/newsRooms';
import Loading from '../components/Loading.js';
import NewsFeedList from '../components/NewsFeedList';

const composer = ({ tag, renderDetailComponent }, onData) => {
  const newsRoom = NewsRooms.findOne({ tag });

  if (newsRoom) {
    onData(null, { renderDetailComponent, feeds: newsRoom.rss });
    return;
  }
  onData(null, { renderDetailComponent });
};

export default composeWithTracker(composer, Loading)(NewsFeedList);
