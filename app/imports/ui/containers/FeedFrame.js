import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';
import FeedFrame from '../components/FeedFrame';

const composer = ({ url, ...props }, onData) => {
  Meteor.call('afterLoad', url, (error, resp) => {
    if (!error) {
      onData(null, { url, ...props, loading: false, html: resp });
    } else {
      onData(null, { url, ...props, loading: false, error });
    }
    return;
  });
  
  onData(null, { url, ...props, loading: true });
};

export default composeWithTracker(composer, Loading)(FeedFrame);
