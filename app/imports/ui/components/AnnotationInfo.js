import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import formatDate from '../../modules/formatDate';
import DisplayUser from './DisplayUser';

class AnnotationInfo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { annotation, style } = this.props;

    return (
      <Row className="annotation-item" style={style}>
        <Col md={12} className="annotation-header">
          <div className="pull-left username"><DisplayUser _id={annotation.createdBy} /></div>
          <div className="pull-right date-create">{formatDate(annotation.createdAt)}</div>
        </Col>
        <Col md={12}>
          <blockquote>
            <p>{annotation.quote}</p>
          </blockquote>
          <p>{annotation.text}</p>
        </Col>
      </Row>
    )
  }
}

export default AnnotationInfo;
