/**
 * @Author: philip
 * @Date:   2017-05-27T21:54:22+00:00
 * @Filename: NewsRoomView.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T15:43:31+00:00
 */



import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ArticleList from '../../components/ArticleList';
import moment from 'moment';

const NothingHere = () => (
  <div>Nothing here for now</div>
);

const formatDate = (date, format="DD.MM.YYYY") => (
  moment(date).format(format)
);

class NewsRoomView extends Component {
  constructor(props) {
    super(props);
    
    props.setTitle(this.props.tag);
  }
  
  render() {
    const { tag, articles } = this.props;

    return (
      <Row className="fh-breadcrumb">
        <Col md={3} style={{ padding: 0 }} className="white-bg full-height-scroll">
          <ul className="list-group elements-list">
            {articles.map((article, index) => (
              <li key={index} className="list-group-item">
                <a data-toggle="tab" href="#tab-1">
                  <small className="pull-right text-muted"> {formatDate(article.pubDate)}</small>
                  <strong>{tag}</strong>
                  <div className="small m-t-xs">
                    <p>{article.title}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Col>

        <Col md={9} style={{ padding: 0 }} className="full-height">
          <div className="wrapper wrapper-content">
            <div className="middle-box text-center animated fadeInRightBig">
              <i className="fa fa-rss" style={{ fontSize: 100 }}/>
              <h3 className="font-bold">Story / Article detail</h3>
              <div className="error-desc">
                Select a feed from the right to display the content
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default NewsRoomView;
