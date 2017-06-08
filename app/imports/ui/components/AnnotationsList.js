/**
 * @Author: philip
 * @Date:   2017-05-30T09:24:47+00:00
 * @Filename: AnnotationsList.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T10:17:13+00:00
 */


import React from 'react';
import formatDate from '../../modules/formatDate';
import AnnotationInfo from './AnnotationInfo';

export default ({ annotations }) => (
  <div id="annotations">
    {annotations.map((annotation, index) => (
      <AnnotationInfo key={index} annotation={annotation} style={{ width: '100%' }}/>
    ))}
  </div>
);
