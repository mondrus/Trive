/**
 * @Author: philip
 * @Date:   2017-05-23T08:46:40+00:00
 * @Filename: newsFeed.router.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-23T08:50:24+00:00
 */



Router.route('/news/:name/:title', {
  name: 'newsFeed',
  controller: 'NewsFeedController'
});

NewsFeedController = RouteController.extend({
  template: 'newsFeed',
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound'
  // waitOn: function() {
  //   return [Meteor.subscribe('clubs'),Meteor.subscribe('connections', Meteor.userId())];
  // },
  // onBeforeAction: function() {
  //   if (Meteor.userId()) {
  //     this.next();
  //   } else {
  //     this.redirect('login');
  //   }
  // }
});
