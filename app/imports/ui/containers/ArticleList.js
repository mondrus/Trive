/**
 * @Author: philip
 * @Date:   2017-05-27T22:58:51+00:00
 * @Filename: ArticleList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T10:05:13+00:00
 */


import React from 'react';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
// import NewsRooms from '/lib/collections/newsRooms';
import Loading from '../components/Loading.js';
import ArticleList from '../components/ArticleList';

const composer = ({ url, renderDetailComponent }, onData) => {
  Meteor.call('getRssArticles', [url], (err, articles) => {
    if (!err) {
      onData(null, { articles, renderDetailComponent, url });
      return;
    }
    console.log(err);
    onData(null, { renderDetailComponent, url });
  });
  
};

export default composeWithTracker(composer, Loading)(ArticleList);
