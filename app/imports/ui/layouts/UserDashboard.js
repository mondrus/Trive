/**
 * @Author: philip
 * @Date:   2017-05-27T20:25:38+00:00
 * @Filename: UserDashboard.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T12:49:05+00:00
 */



import React, { Component } from 'react';

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
          <a href="#" id="btnLogout">
            <i className="fa fa-sign-out"></i> Log out
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

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

import Navigation from '../components/Navigation';

class UserDashboard extends Component {
  constructor() {
    super();
    this.state = {};
    this.setCategory = this.setCategory.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }
  
  componentDidMount() {
    document.body.classList.toggle('mini-navbar', true);
  }
  
  setCategory() {
    this.setState({ category });
  }
  
  setTitle(title) {
    this.setState({ title });
  }
  
  render() {
    const { loggingIn, authenticated, component, ...props } = this.props;
    const { title, category } = this.state;

    return (
      <div id="wrapper page">
        <Navigation />
        <div id="page-wrapper" className="gray-bg">
          <TopNav />
          <PageHeading title={title} category={category} />
          {React.createElement(component, { ...props, loggingIn, authenticated, setTitle: this.setTitle, setCategory: this.setCategory })}
        </div>
      </div>
    );
  }
}

export default UserDashboard;
