import React, { Component } from 'react';
import Annotator from 'annotator';
import { composeWithTracker } from 'react-komposer';
import cheerio from 'cheerio';
import { Col, Button, Row, Glyphicon } from 'react-bootstrap';
import AnnotationInfo from '../../components/AnnotationInfo';
import AnnotationStorage, { UserUtil } from '../../../modules/CustomAnnotationStorage';

const runAnnotation = (element, { title, web_uri }, annotations) => {
  const app = new Annotator.App();
  app.include(UserUtil);
  app.include(Annotator.ui.main, { element });
  app.include(AnnotationStorage, { story: { title, web_uri }, annotations });
  
  app.start()
  .then(() => { app.annotations.load(); });
};


class ViewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnnotations: true
    };
  }
  
  componentDidMount() {
    document.body.classList.toggle('gray-bg', true);
  }
  
  render() {
    const { loading, annotations } = this.props;
    const { showAnnotations } = this.state;

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <div id="annotations" className={showAnnotations ? 'show-annotations' : ''}>
          <div className="annotation-nav">
            <ul>
              <li>
                <Button 
                  bsStyle="primary"
                  onClick={() => {
                    this.setState({ showAnnotations: !showAnnotations });
                  }}
                >
                  <Glyphicon glyph={showAnnotations ? 'chevron-right': 'chevron-left'} />
                </Button>
              </li>
            </ul>
            <Row className="header">
              <Col md={12}>
                <div className="pull-left">
                  <h4> Trive</h4>
                </div>
                <div className="pull-right">
                  <h5><span style={{ fontWeight: 400 }}>Annotations</span> {annotations.length}</h5>
                </div>
                <div className="clearfix" />
              </Col>
            </Row>
          </div>
          <div className="annotations-toolbar">
            {annotations.map((annotation, index) => ( 
              <AnnotationInfo key={index} annotation={annotation} />
            ))}
          </div>
        </div>
        <div id="mainContent"/>
      </div>
    );
  }
  
  componentWillReceiveProps(nextProps) {
    const { html, loading, annotations } = nextProps;
    
    // console.log(nextProps);
    if (html) {
      if (this.props.annotations.length !== annotations.length) {
        return;
      }
      const $ = cheerio.load(html);
      
      document.head.innerHTML += $('head').html();
      document.body.className += ` ${$('body').attr('class')}`;
      // document.body.innerHTML = $('body').html();
      
      document.getElementById('mainContent').innerHTML = $('body').html();
      
      // document.getElementById('mainContent').
      document.querySelector('head').innerHTML += '<link rel="stylesheet" href="/assets/css/annotator.css" type="text/css"/>';
    }
  }

  componentDidUpdate() {
    const { link, annotations, html } = this.props;
    if (html) {
      runAnnotation(document.getElementById('mainContent'), { title: document.title, web_uri: link }, annotations);
    }
    
  }
}

const composer = (props, onData) => {
  const handle = Meteor.subscribe('annotations', { web_uri: props.link });
  
  if (handle.ready()) {
    const annotations = Annotations.find().fetch();

    onData(null, { ...props, loadingAnnotations: false, annotations });
    return;
  }
  onData(null, { ...props, loadingAnnotations: true, annotations: [] });
};


export default composeWithTracker(composer)(ViewStory);
