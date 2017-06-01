/**
 * @Author: philip
 * @Date:   2017-05-23T07:35:17+00:00
 * @Filename: lib.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-23T17:47:22+00:00
 */


var FeedJett = Meteor.npmRequire('feedjett');
var request = Meteor.npmRequire('request');

getResults = function(feedUrl, callback) {
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

// module.exports = getResults;
