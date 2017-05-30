/**
 * @Author: philip
 * @Date:   2017-05-27T16:37:07+00:00
 * @Filename: Index.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T18:07:11+00:00
 */


import React, { Component } from 'react';


class Index extends Component {
  constructor() {
    super();
  }
  
  componentWillMount() {
      console.log('hoel');
  }
  
  componentDidMount() {
    $("#siteloader").html('<object data="https://news.bitcoin.com/bitcoin-improvement-proposal-compromise/?utm_source=OneSignal%20Push&utm_medium=notification&utm_campaign=Push%20Notifications" />');
  }
  
  render() {
    return (
      <div className="Index" style={{ backgroundColor: '#fff' }}>
        Welcome to trive
        {/* <div id="siteloader"></div> */}
        <iframe width="420" height="315" src="http://www.tutorialrepublic.com/html-tutorial/html-iframes.php" frameborder="0" allowfullscreen>
</iframe>
        {/* <object type="text/html" data="https://news.bitcoin.com/bitcoin-improvement-proposal-compromise/?utm_source=OneSignal%20Push&utm_medium=notification&utm_campaign=Push%20Notifications" width="100%" height="100%" /> */}
      </div>
    );
  }
}

export default Index;
