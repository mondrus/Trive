import React, { Component } from 'react';
import Annotator from 'annotator';
import AnnotationStorage, { UserUtil } from '../../../modules/CustomAnnotationStorage';

class ViewStory extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    document.body.classList.toggle('gray-bg', true);
  }
  
  render() {
    const { loading } = this.props;

    if (loading) {
      return <div>Loading...</div>
    }

    // const { link, html } = this.props;
    return (
      <div>
        {/* <iframe src={link} name="targetframe" allowTransparency="true" scrolling="no" frameBorder="0" >
        </iframe> */}
        {/* <div id="annotationsBar"></div> */}
        {/* <div id="content" style={{ backgroundColor: '#FFF !important' }}>
          Hello
        </div> */}
      </div>
    );
  }
  
  componentWillReceiveProps(nextProps) {
    const { html } = nextProps;
    
    if (html) {
      console.log('hol');
      document.write(html);
      document.body.id += ' triveAnnotator';
      document.querySelector('head').innerHTML += '<link rel="stylesheet" href="/assets/css/annotator.css" type="text/css"/>';
      console.log(document.getElementById('triveAnnotator'));
      
      const app = new Annotator.App();
      app.include(UserUtil);
      app.include(Annotator.ui.main, {
        element: document.getElementById('triveAnnotator')
      });
      
      app
      .start()
      .then(function () {
        console.log('hosls', app);
      });
    }
  }

  componentDidUpdate() {
    console.log('updated At', new Date());
  }
}

export default ViewStory;
