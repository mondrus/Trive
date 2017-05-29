/**
 * @Author: philip
 * @Date:   2017-05-29T13:21:16+00:00
 * @Filename: RssFeedModal.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T14:22:30+00:00
 */



import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const RssFeedModal = ({ showModal, hideModal, size="modal-sm", feed }) => (
  <Modal show={showModal} onHide={hideModal} dialogClassName={size}>
    <Modal.Header closeButton>
      <Modal.Title>Select News</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      { console.log(feed) }
      { feed &&
        <ul className="category-list" style={{ padding: 0 }}>
          { feed.rss.map(({ title, url, _id }, index) => (
            <li key={index}>
              <Link to={`/dashboard/${feed.tag}/${_id}`}> 
                <i className="fa fa-rss-square pull-right"></i> {title} 
              </Link>
            </li>
          ))}
        </ul>
      }
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={hideModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

RssFeedModal.propTypes = {
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
}

export default RssFeedModal;
