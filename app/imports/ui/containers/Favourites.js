/**
 * @Author: philip
 * @Date:   2017-05-31T10:02:24+00:00
 * @Filename: Favourites.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T10:12:06+00:00
 */



import React from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Stories from '/lib/collections/stories';
import Loading from '../components/Loading.js';
import Favourites from '../pages/user/Favourites';

const composer = (props, onData) => {
  const ready = Meteor.subscribe('story.liked');
  
  if (ready) {
    const feeds = Stories.find({ likes: Meteor.userId() }).fetch();
    onData(null, { ...props, feeds });
  }  
};

export default composeWithTracker(composer, Loading)(Favourites);

