/**
* @Author: philip
* @Date:   2017-05-27T23:46:28+00:00
* @Filename: NewsFeedDetail.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T10:29:29+00:00
*/


/* window */
import React, { Component } from 'react';
import { Button, ButtonToolbar, Col, Panel, Row } from 'react-bootstrap';
import Annotator from 'annotator';
import Annotations from '/lib/collections/annotations';
import AnnotationStorage, { UserUtil } from '../../modules/CustomAnnotationStorage';
import annotatorMarginalia from '../../modules/annotator.maginalia';
import AnnotationsList from './AnnotationsList';
import QueryLink from '../components/QueryLink';

const dummyFeed = {
  customProp: "customProp!",
  description: "Travelers with British Airways are facing disruptions Saturday after the airline reported major computer problems.",
  guid: "http://www.cnn.com/2017/05/27/world/british-airways-computer-failure/index.html",
  image: "http://i2.cdn.turner.com/cnnnext/dam/assets/170527134609-06-british-airways-delays-heathrow-0527-super-169.jpg",
  link: "http://www.cnn.com/2017/05/27/world/british-airways-computer-failure/index.html",
  pubDate: 'Sun May 28 2017 04:28:40 GMT+0000 (UTC)',
  title: "All British Airways flights from two main London airports canceled"
};

class NewsFeedDetail extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let { feed, annotationsLoading, annotations } = this.props;    
    feed = feed ? feed : dummyFeed;

    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <Row>
          <Col md={12}>
            <Panel>
              <div className="pull-left">
                <b>{feed.title}</b>
              </div>
              <div className="pull-right">
                <QueryLink
                  to={{
                    pathname: '/view-story',
                    query: { link: feed.link }
                  }}
                  target="blank"
                >
                  View Story
                </QueryLink>
                <b> Annotations </b>
                <span>{annotations.length}</span>
              </div>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Row>
              <Col md={7} id="currentFeed">
                <AnnotationsList annotations={annotations}/>
              </Col>
              <Col md={5}>
                <p>
                  Visit Annotation context
                </p>
                <p>
                  Annotators
                </p>
                <p>
                  Url
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewsFeedDetail;


