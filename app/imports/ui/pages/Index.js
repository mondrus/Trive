/**
 * @Author: philip
 * @Date:   2017-05-27T16:37:07+00:00
 * @Filename: Index.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T11:10:03+00:00
 */


import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';


class Index extends Component {
  constructor() {
    super();
  }
  
  componentWillMount() {
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    Meteor.call('afterLoad', (e, data) => {
      if (e) {
        console.log('error', e);
        return;
      }
      $('.hollo').contents().find('html').html(data);
      // console.log(data);
    });
  }
  
  render() {
    return (
      <div className="Index" style={{ backgroundColor: '#fff' }}>
        Welcome to trive
        <iframe className="hollo">Loading...</iframe>
      </div>
    );
  }
}

export default Index;
