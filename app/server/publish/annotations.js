/**
 * @Author: philip
 * @Date:   2017-05-27T13:46:57+00:00
 * @Filename: annotations.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T14:42:24+00:00
 */


import Annotations from '/lib/collections/annotations';
import NewsStories from '/lib/collections/stories';
import { Meteor } from 'meteor/meteor';
import { publishComposite } from 'meteor/reywood:publish-composite';


publishComposite('annotations', function({ web_uri }) {
  return {
    find() {
      return NewsStories.find({ web_uri });
    },
    children: [
      {
        find({ _id }) {
          return Annotations.find({ storyId: _id });
        },
        children: [
          {
            find({ createdBy }) {
              return Meteor.users.find(createdBy);
            }
          }
        ]
      }
    ],
  }
});
