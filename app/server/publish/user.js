/**
 * @Author: philip
 * @Date:   2017-05-26T17:18:31+00:00
 * @Filename: user.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-26T17:31:54+00:00
 */


import { Meteor } from 'meteor/meteor';
import NewsRooms from '/lib/collections/newsRooms';

Meteor.publish('userDashboardData', function(){
  return [
    Meteor.users.find(this.userId),
    NewsRooms.find()
  ];
});
