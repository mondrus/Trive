/**
 * @Author: philip
 * @Date:   2017-05-28T07:22:57+00:00
 * @Filename: NewsFeedDetail.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T10:28:05+00:00
 */


import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Annotations from '/lib/collections/annotations';
import NewsFeedDetail from '../components/NewsFeedDetail';
import Loading from '../components/Loading.js';

const composer = ({ feed, ...props }, onData) => {
  const handle = Meteor.subscribe('annotations', feed);
  
  if (handle.ready()) {
    const ann = Annotations.findOne();

    onData(null, {
      annotations: ann ? ann.annotations : [],
      annotationsLoading: false,
      feed,
      ...props
    });
    return;
  }

  onData(null, { feed, ...props, annotationsLoading: true });
};

export default composeWithTracker(composer, Loading)(NewsFeedDetail);
