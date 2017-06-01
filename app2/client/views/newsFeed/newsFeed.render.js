/**
 * @Author: philip
 * @Date:   2017-05-23T11:11:55+00:00
 * @Filename: newsFeed.render.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-23T18:44:51+00:00
 */

Template.newsFeed.onCreated(function() {
  this.reactiveArticlesVar = new ReactiveVar(false);
  
  const instance = Template.instance();
  
  const rssArray = function(feed) {
    return feed.url;
  }
  
  const newsSite = NewsSites.find(function(param) {
    return param.name === Router.current().params.name;
  });
  
  const rss = newsSite.rss.find(function(param) {
    return param.title === Router.current().params.title;
  })
  
  
  // console.log(rss);
  
  // console.log(newsSite.map(rssArray));
  
  if (instance.reactiveArticlesVar.get() === false) {
    Meteor.call('getRssArticles', [rss.url], function(err, data) {
      if (!err) {
        instance.reactiveArticlesVar.set(data);
      }
    });
  }
});
