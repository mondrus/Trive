/**
 * @Author: philip
 * @Date:   2017-05-27T23:34:48+00:00
 * @Filename: Navigation.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T12:57:47+00:00
 */



import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar-default navbar-static-side" role="navigation">
    <div className="sidebar-collapse">
      <a className="close-canvas-menu"><i className="fa fa-times"></i></a>
      
      <ul className="nav metismenu" id="side-menu">
        <li className="nav-header">
          <div className="dropdown profile-element"> <span>
            <img alt="image" className="img-circle" src="/img/profile_small.jpg" />
          </span>
          <a data-toggle="dropdown" className="dropdown-toggle" href="#">
            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
        </span> <span className="text-muted text-xs block">Art Director <b className="caret"></b></span> </span> </a>
      <ul className="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="{{pathFor route='profile'}}">Profile</a></li>
              <li><a href="{{pathFor route='contacts'}}">Contacts</a></li>
              <li><a href="{{pathFor route='mailbox'}}">Mailbox</a></li>
            <li className="divider"></li>
              <li><a href="{{pathFor route='login'}}">Logout</a></li>
            </ul>
          </div>
          <div className="logo-element">
            IN+
          </div>
        </li>
        <li className="{{isActiveRoute regex='dashboard1'}}">
          <Link to="/dashboard">
            <i className="fa fa-th-large" />
            <span className="nav-label">Dashboard</span>
          </Link>
        </li>
        <li className="{{isActiveRoute regex='dashboard1'}}">
          <Link to="/dashboard/favourites">
            <i className="fa fa-heart" />
            <span className="nav-label">Favourite Stories</span>
          </Link>
        </li>
        <li className="{{isActiveRoute regex='dashboard1'}}">
          <Link to="/dashboard/annotations">
            <i className="fa fa-pencil-square-o" />
            <span className="nav-label">My Annotations</span>
          </Link>
        </li>
      </ul>    
    </div>
  </nav>
);
