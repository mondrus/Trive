/**
 * @Author: philip
 * @Date:   2017-05-27T20:46:16+00:00
 * @Filename: NewsRoomsList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T13:40:09+00:00
 */


import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import NewsRooms from '/lib/collections/newsRooms';
import Loading from '../components/Loading.js';
import NewsRoomsList from '../components/NewsRoomsList.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('newsRooms.all');
  
  if (subscription.ready()) {
    const newsRooms = NewsRooms.find().fetch();
    onData(null, { newsRooms, params });
  }
};

export default composeWithTracker(composer, Loading)(NewsRoomsList);
