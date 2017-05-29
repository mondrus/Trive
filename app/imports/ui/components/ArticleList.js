/**
 * @Author: philip
 * @Date:   2017-05-27T22:59:25+00:00
 * @Filename: ArticleList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T14:18:15+00:00
 */


import React, { Component } from 'react';
import NewsFeedDetail from '../containers/NewsFeedDetail';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    
    this.renderStory = this.renderStory.bind(this);
  }
  
  renderStory(story) {
    const { renderDetailComponent } = this.props;
    
    renderDetailComponent(
      <NewsFeedDetail story={story} renderDetailComponent={renderDetailComponent} />
    );
  }
  
  render() {
    const { articles } = this.props;
    if (!articles) {
      return (<div>No Article found</div>);
    }

    return (
      <div className="newsFeedList">
        <div className="full-height-scroll">
          {articles.map((article, index) => {
            const { image, url, pubDate, title, description } = article;
            return (
              <div className="media newsFeedItem" key={index}>
                <a className="pull-left image" href="#">
                  <img className="media-object" src={image} alt = "Media Object" />
                </a>

                <div className="media-body">
                  <h4 className="media-heading">
                    <a
                      href="#"
                      className="currentStory"
                      data-url={url}
                      onClick={(e) => {
                        e.preventDefault();
                        this.renderStory(article);
                      }}
                    >
                      {title}
                    </a>
                  </h4>
                  <h6>{`${pubDate}`}</h6>
                  <p>
                    {description ? description : title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default ArticleList;
