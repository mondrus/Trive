/**
 * @Author: philip
 * @Date:   2017-05-26T18:32:23+00:00
 * @Filename: lib.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-26T18:33:59+00:00
 */


import FeedJett from 'feedjett';
import request from 'request';

const getResults = (feedUrl, callback) => {
  var articles = [];
  
  var error = function () {
    callback([]);
  };
  
  var afterParseItem = function (item, feedType) {
    item.customProp = 'customProp!';
  };
  
  var feedParser = FeedJett.createInstance({ parseRawNode: true, feedUrl: feedUrl, afterParseItem: afterParseItem });
  feedParser.on('readable', function () {
    var article;
    while (article = this.read()) {
      articles.push(article);
    }
  })
  .on('end', function () {
    callback(articles);
  })
  .on('error', error);
  
  request(feedUrl, {pool: false})
  .on('response', function (res) {
    if (res.statusCode != 200) {
      return this.emit('error', new Error('Bad status code'));
    }
    res.pipe(feedParser);
  })
  .on('error', error);
}

export default getResults;

