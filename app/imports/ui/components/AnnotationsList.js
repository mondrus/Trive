/**
 * @Author: philip
 * @Date:   2017-05-30T09:24:47+00:00
 * @Filename: AnnotationsList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T10:17:13+00:00
 */


import React from 'react';
import formatDate from '../../modules/formatDate';

export default ({ annotations }) => (
  <div className="annnotations">
    {annotations.map((annotation, index) => (
      <div key={index} className="annotation-item">
        <div className="annotation-text">{annotation.text}</div>
        <div className="annotation-date">
          <i className="fa fa-clock-o" />  {formatDate(annotation.createdAt)}
        </div>
      </div>
    ))}
  </div>
);
