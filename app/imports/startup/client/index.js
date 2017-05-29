/**
 * @Author: philip
 * @Date:   2017-05-27T16:33:26+00:00
 * @Filename: index.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T16:34:38+00:00
 */



import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
});
 
 