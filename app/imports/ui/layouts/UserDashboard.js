/**
 * @Author: philip
 * @Date:   2017-05-27T20:25:38+00:00
 * @Filename: UserDashboard.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-30T07:27:01+00:00
 */



import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import PageHeading from '../components/PageHeading';
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
