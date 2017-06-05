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

const dummyUrl = 'http://edition.cnn.com/2017/05/30/politics/russians-trump-campaign-information/index.html';

Meteor.methods({
  afterLoad(url = dummyUrl) {
    const future = new Future();
    
    const options = { url };

    function callback(error, response, body) {
        if (error) {
          future.throw(error);
          return;
        }
        if(response.statusCode === 200) {
          future.return(body);
        } else if (response.statusCode === 404) {
          future.throw(new Meteor.Error('Page not found'));
        } else {
          console.log(response.statusCode);
          future.throw(new Meteor.Error('Unknown error'));
        }
        return;
    }

    request(options, callback);
    // 
    return future.wait();
  }
});
