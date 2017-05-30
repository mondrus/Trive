/**
 * @Author: philip
 * @Date:   2017-05-30T07:21:22+00:00
 * @Filename: TopNav.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T07:24:18+00:00
 */



import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

const TopNav = () => (
  <div className="row border-bottom">
    <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0}}>
      <div className="navbar-header">
        <a id="navbar-minimalize" className="minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
      <form role="search" className="navbar-form-custom" action="search_results">
          <div className="form-group">
            <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
          </div>
        </form>
      </div>
      <ul className="nav navbar-top-links navbar-right">
        <li className="dropdown">
          <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
            <i className="fa fa-envelope"></i>
          </a>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
            <i className="fa fa-bell"></i>
          </a>
        </li>
        <li>
          <Link to="/login" onClick={() => Meteor.logout()}>
            <i className="fa fa-sign-out"></i> Log out
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default TopNav;
