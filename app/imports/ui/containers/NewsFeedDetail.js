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
  const handle = Meteor.subscribe('annotations', { web_uri: feed.link });
  
  if (handle.ready()) {
    // TODO: search with the storyId with { web_uri: feed.link }
    const annotations = Annotations.find().fetch();

    onData(null, {
      annotationsLoading: false,
      annotations,
      feed,
      ...props
    });
    return;
  }

  // onData(null, { feed, ...props, annotationsLoading: true });
};

export default composeWithTracker(composer, Loading)(NewsFeedDetail);
