/**
 * @Author: philip
 * @Date:   2017-05-30T07:26:23+00:00
 * @Filename: PageHeading.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T07:26:59+00:00
 */


import React from 'react';

const PageHeading = ({ category, title }) => (
  <div className="row wrapper border-bottom white-bg page-heading">
      <div className="col-lg-12">
          <h2>{title}</h2>
          <ol className="breadcrumb">
              <li>
                  <a href="/dashboard">Home</a>
              </li>
              {category && <li><a>{category}</a></li>}
              <li className="active">
                  <strong>{title}</strong>
              </li>
          </ol>
      </div>
  </div>
);

export default PageHeading;
