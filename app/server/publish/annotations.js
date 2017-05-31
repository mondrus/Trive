/**
 * @Author: philip
 * @Date:   2017-05-27T13:46:57+00:00
 * @Filename: annotations.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T08:32:58+00:00
 */


import Annotations from '/lib/collections/annotations';
import NewsStories from '/lib/collections/stories';
import { publishComposite } from 'meteor/reywood:publish-composite';


publishComposite('annotations', ({ link, guid }) => ({
  find() {
    const selector = { link, guid };
    return NewsStories.find(selector);
  },
  children: [{
    find({ _id }) {
      return Annotations.find({ storyId: _id });
    }
  }]
}));
