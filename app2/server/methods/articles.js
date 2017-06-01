/**
 * @Author: philip
 * @Date:   2017-05-23T11:24:02+00:00
 * @Filename: articles.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-24T09:25:00+00:00
 */

// websiteData = Scrape.website("http://edition.cnn.com/2017/05/23/us/maryland-stabbing-victim-graduation-day/index.html");
// 
// 
// console.log(websiteData);

const articles = [
 {
   pubDate: '16.02.2015',
   title: '16.02.2015',
   description: 'Survived not only five centuries, but also the leap scrambled it to make.',
   source: 'Riviera State 32/106',
   link: '',
   image: '',
   guid: '',
   raw: '',
   meta: '',
   customProp: ''
 }
];
 
Meteor.methods({
  getRssArticles: function(feeds) {    
    Future = Npm.require('fibers/future');

    console.log(feeds);
    var future = new Future();
    var count = 0;
    var results = [];
    
    feeds.forEach(function (feedUrl) {
      getResults(feedUrl, function (headlines) {
        count++;
        results = results.concat(headlines);

        if (count === feeds.length) {
           future['return'](results);
        }
      });
    });
    
    return future.wait();
  }
})