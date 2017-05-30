/**
* @Author: philip
* @Date:   2017-05-27T23:46:28+00:00
* @Filename: NewsFeedDetail.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T09:12:57+00:00
*/


/* window */
import React, { Component } from 'react';
import { Button, ButtonToolbar, Col, Panel, Row } from 'react-bootstrap';
import Annotator from 'annotator';
import Annotations from '/lib/collections/annotations';
import AnnotationStorage, { UserUtil } from '../../modules/CustomAnnotationStorage';
import annotatorMarginalia from '../../modules/annotator.maginalia';

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
    
    this.app = new Annotator.App();
    this.app.include(UserUtil);
  }
  
  componentWillReceiveProps(nextProps) {
    const { feed, annotationsLoading, annotations } = nextProps;

    if (!annotationsLoading) {
      const ann = Annotations.findOne();
      
      console.log('nosns', ann ? ann.annotations : []);
      this.app.include(AnnotationStorage, {
        story: feed,
        annotations: ann ? ann.annotations : []
      });

      this.app.annotations.load(ann ? ann.annotations : []);
    }
  }
  
  render() {
    let { feed, annotationsLoading } = this.props;
    
    feed = feed ? feed : dummyFeed;

    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        <Row>
          <Col md={12}>
            <Panel>
              <b>{feed.title}</b>
              <ButtonToolbar className="pull-right">
                <Button bsSize="xsmall" bsStyle="primary" disabled={annotationsLoading}>
                  { !annotationsLoading ?
                    'Show Annotations'
                  : 
                    <span>
                      Loading  <span className="loading dots" />
                    </span>
                  }
                </Button>
              </ButtonToolbar>
            </Panel>
          </Col>
        </Row>
        <div className="row">
          <div className="col-lg-12">
            <div className="ibox product-detail">
              <div className="ibox-content">
                <div className="row">
                  <div className="col-md-5">
                    <div className="image-imitation" style={{ padding: 0 }}>
                      <img src={feed.image} style={{ height: '100%', width: '100%' }}/>
                    </div>
                    <div className="btn-group">
                      <button className="btn btn-white btn-sm">
                        <i className="fa fa-star"></i> Add to Favourite 
                      </button>
                    </div>
                  </div>
                  <div className="col-md-7" id="currentFeed">
                    <h2 className="font-bold m-b-xs">
                      {feed.title}
                    </h2>
                    <small>{`${feed.pubDate}`}</small>
                    <hr />                    
                    <div className="small text-muted">
                      {feed.description}
                    </div>
                    <hr />
                  </div>
                </div>
                
              </div>
              <div className="ibox-footer">
                <span className="pull-right">
                  <i className="fa fa-clock-o"></i> {`${feed.pubDate}`}
                </span>
                <div className="clearfix" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    const { feed } = this.props;
    const ann = Annotations.findOne();
    
    console.log('componentDidMount');
    
    this.app.include(Annotator.ui.main, {
      element: document.getElementById('currentFeed')
    });

    this.app.include(AnnotationStorage, {
      story: feed,
      annotations: ann ? ann.annotations : []
    });
    
    // this.app.include(annotatorMarginalia, {
    //   show_author: true
    // });
    this.app.start()
    .then(() => {
      this.app.annotations.load();
    });
  }
}

export default NewsFeedDetail;


