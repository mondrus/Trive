/**
 * @Author: philip
 * @Date:   2017-05-28T07:22:57+00:00
 * @Filename: NewsFeedDetail.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T09:51:27+00:00
 */


import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Annotations from '/lib/collections/annotations';
import Stories from '/lib/collections/stories';
import NewsFeedDetail from '../components/NewsFeedDetail';
import Loading from '../components/Loading.js';

const composer = ({ feed, ...props }, onData) => {
  const handle = Meteor.subscribe('annotations', feed);
  
  if (handle.ready()) {
    const ann = Annotations.findOne();
    const story = Stories.findOne();

    onData(null, {
      annotations: ann ? ann.annotations : [],
      annotationsLoading: false,
      story: story ? story : {},
      feed,
      ...props
    });
    return;
  }

  onData(null, { feed, ...props, story: {}, annotationsLoading: true });
};

export default composeWithTracker(composer, Loading)(NewsFeedDetail);
