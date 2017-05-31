/**
 * @Author: philip
 * @Date:   2017-05-29T12:59:12+00:00
 * @Filename: Favourites.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T10:23:59+00:00
 */



import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NewsFeedList from '../../components/NewsFeedList';
import formatDate from '../../../modules/formatDate';
import NewsFeedDetail from '../../containers/NewsFeedDetail';

class Favourites extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.renderFeed = this.renderFeed.bind(this);
  }

  renderFeed(feed) {
    this.setState({ feed });
  }

  render() {
    const { feeds } = this.props;
    const { feed } = this.state;

    return (
      <Row>
        <Col md={3} style={{ padding: 0 }} className="white-bg full-height-scroll">
          <ul className="list-group elements-list">
            {feeds.map((article, index) => (
              <li key={index} className="list-group-item">
                <Link to="#" onClick={() => this.renderFeed(article)}>
                  <small className="pull-right text-muted"> {formatDate(article.pubDate)}</small>
                  <span>Source: <strong></strong></span>
                  {/* <strong>{article.source}</strong> */}
                  <div className="small m-t-xs">
                    <p>{article.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={9} className="full-height" style={{ padding: 0 }}>
          { feed ?
            <NewsFeedDetail feed={feed} />
          :
            <div className="wrapper wrapper-content">
              <div className="middle-box text-center animated fadeInRightBig">
                <i className="fa fa-rss" style={{ fontSize: 100 }}/>
                <h3 className="font-bold">Story / Article detail</h3>
                <div className="error-desc">
                  Select a feed from the right to display the content
                </div>
              </div>
            </div>
          }
        </Col>
      </Row>
    );
  }
}

export default Favourites;
