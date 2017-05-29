/**
 * @Author: philip
 * @Date:   2017-05-26T12:43:27+00:00
 * @Filename: newsRooms.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T14:30:47+00:00
 */


import { Meteor } from 'meteor/meteor';
import Future from 'fibers/future';
import getResults from '../lib/lib';

Meteor.methods({
  getRssArticles: function(urls) {
    var future = new Future();
    var count = 0;
    var results = [];
    
    urls.map((feedUrl) => {
      getResults(feedUrl, (headlines) => {
        count++;
        results = results.concat(headlines);

        if (count === urls.length) {
           future['return'](results);
        }
      });
    });
    
    return future.wait();
  }
});