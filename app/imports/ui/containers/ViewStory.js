import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Loading from '../components/Loading';
import ViewStory from '../pages/user/ViewStory';
import { parse } from 'query-string';

const composer = ({ url, location, ...props }, onData) => {
  const { search } = location;
  const { link } = parse(search);
  
  Meteor.call('afterLoad', link, (error, resp) => {
    if (!error) {
      onData(null, { url, location, link, ...props, loading: false, html: resp });
    } else {
      onData(null, { url, location, link, ...props, loading: false, error });
    }
    return;
  });

};

export default composeWithTracker(composer, Loading)(ViewStory);
