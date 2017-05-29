/**
 * @Author: philip
 * @Date:   2017-05-27T21:15:49+00:00
 * @Filename: NewsRoomItem.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T13:53:37+00:00
 */


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';

export default ({ name, image, description, tag, showRssFeedModal, ...props }) => (
  <Col md={3}>
    <div className="ibox">
      <div className="ibox-content product-box">
        <div
          className="product-imitation"
          style={{ height: 245, maxHeight: 245, padding: `${image ? '0' : '90px 0px'}` }}
        >
          {image && <img src={image} alt={name} />}
          {!image && name }
        </div>
        <div className="product-desc">
          <Link to={`/dashboard/${tag}`} className="product-name"> {name}</Link>
          <div className="small m-t-xs">{description}</div>
          <div className="m-t text-righ">
            <Button onClick={() => showRssFeedModal({ name, tag, ...props })} className="btn-xs btn-outline btn-primary">
              Feeds <i className="fa fa-long-arrow-right"></i> 
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Col>
);
 
