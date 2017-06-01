/**
 * @Author: philip
 * @Date:   2017-05-23T18:07:33+00:00
 * @Filename: list.helpers.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-23T18:10:31+00:00
 */



 Template.newsFeedList.helpers({
   trimString: function(stringToShorten, maxCharsAmount) {
     if(stringToShorten.length > maxCharsAmount){
       return stringToShorten.substring(0, maxCharsAmount) + '...';
     }
     return stringToShorten;
   }
 });