import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import Annotator from 'annotator';
import AnnotationStorage, { UserUtil } from '../../modules/CustomAnnotationStorage';

class FeedFrame extends Component {
  constructor(props) {
    super(props);

    this.app = new Annotator.App();
    this.app.include(UserUtil);
  }
  
  render() {
    const { url, error, loading } = this.props;
    
    if (error) {
      return (
        <div>
          Error loading feed. {error.message}
          <p>
            This is most likely from a broken link to this article.
          </p>
        </div>
      );
    }
    
    if (loading) {
      return (<div>Loading...</div>);
    }

    return (
      <iframe
        id="iframeContainer"
        frameBorder="0"
        allowFullScreen
        style={{
          minHeight: 1200,
          width: '100%'
        }}
      />
    )
  }
  
  componentDidMount() {
    // console.log(this.props);
    const { html, loading } = this.props;
    
    if (!loading) {
      const iframe = document.getElementById('iframeContainer');
      iframedoc = iframe.contentDocument || iframe.contentWindow.document;
      
      iframedoc.body.innerHTML = html;
    }
  }
  
  componentDidUpdate() {
    const { loading, error, html } = this.props;
    
    if (!loading && !error) {
      const iframe = document.getElementById('iframeContainer');
      console.log(iframe);
      
      var style = document.createElement('style');
      style.textContent =
      `body {
        background-color: #fefefe !important;
        color: #262626 !important;
      }` 
      ;
      iframedoc = iframe.contentDocument || iframe.contentWindow.document;
      
      iframedoc.body.innerHTML = html;
      iframe.contentDocument.head.appendChild(style);
    
      /** annotations **/
      
      // console.log(iframedoc.body);
      this.app.include(Annotator.ui.main, {
        element: iframedoc.body
      });
      
      this.app.start()
      .then(() => {
        console.log('hoel');
        // this.app.annotations.load();
      });
    }
  }
}

export default FeedFrame;
