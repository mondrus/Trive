/**
 * @Author: philip
 * @Date:   2017-05-27T22:21:05+00:00
 * @Filename: NewsFeedList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-28T07:33:25+00:00
 */


import React, { Component } from 'react';
import ArticleList from '../containers/ArticleList';

class NewsFeedList extends Component {
  constructor(props) {
    super(props);
    this.getRssData = this.getRssData.bind(this);
  }
  
  getRssData(url) {
    const { renderDetailComponent } = this.props;
    
    renderDetailComponent(
      <ArticleList url={url} renderDetailComponent={renderDetailComponent} />
    );
  }
  
  render() {
    const { feeds } = this.props;

    if (!feeds) {
      return <div>No feeds found</div>
    }

    return (
      <ul className="category-list" style={{ padding: 0 }}>
        { feeds.map(({ title, url }, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                this.getRssData(url);
              }}
            > 
              <i className="fa fa-rss-square pull-right"></i> {title} 
            </a>
          </li>
        ))}
      </ul>
    )
  }
}

export default NewsFeedList;
