/**
 * @Author: philip
 * @Date:   2017-05-29T18:45:23+00:00
 * @Filename: helperMethods.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T12:04:14+00:00
 */



import { Meteor } from 'meteor/meteor';
import request from 'request';
import Future from 'fibers/future';
import fetch from 'node-fetch';

Meteor.methods({
  afterLoad(url) {
    const future = new Future();
    
    fetch(url)
    .then(resp => resp.text())
    .then((text) => {
      future.return(text);
    })
    .catch((error) => {
      future.throw(new Meteor.Error('Unknown error'));
    });

    return future.wait();
  }
});
