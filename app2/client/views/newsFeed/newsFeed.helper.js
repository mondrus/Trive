/**
 * @Author: philip
 * @Date:   2017-05-23T10:01:40+00:00
 * @Filename: newsFeed.helper.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-24T00:00:53+00:00
 */

Template.newsFeed.helpers({
  articles: function() {
    const articles = Template.instance().reactiveArticlesVar.get();
    console.log(articles[0]);
    return articles;
  }
});