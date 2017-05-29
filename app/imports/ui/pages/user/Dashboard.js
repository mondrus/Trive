/**
 * @Author: philip
 * @Date:   2017-05-27T19:49:32+00:00
 * @Filename: Dashboard.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T14:00:01+00:00
 */


import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsRoomsList from '../../containers/NewsRoomsList';
import RssFeedModal from '../../components/RssFeedModal';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showRssFeedModal: false
    };
    
    this.showRssFeedModal = this.showRssFeedModal.bind(this);
    this.hideRssFeedModal = this.hideRssFeedModal.bind(this)
  }
  
  showRssFeedModal(feed) {
    this.setState({ showRssFeedModal: true, feed });
  }
  
  hideRssFeedModal() {
    this.setState({ showRssFeedModal: false, feed: undefined });
  }
  
  render() {
    const { showRssFeedModal, feed } = this.state;
    
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <Row>
          <RssFeedModal showModal={showRssFeedModal} feed={feed} hideModal={this.hideRssFeedModal} />
          <NewsRoomsList showRssFeedModal={this.showRssFeedModal}/>
        </Row>
      </div>
    );
  }
}

export default Dashboard;

