/**
 * @Author: philip
 * @Date:   2017-05-27T16:50:36+00:00
 * @Filename: index.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T12:45:18+00:00
 */



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Signup from './Signup';
import Login  from './Login';

export default class Public extends Component {
  componentDidMount() {
    document.body.classList.toggle('gray-bg', true);
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('gray-bg', true);
  }
  componentWillUnmount() {
    document.body.classList.remove('gray-bg');
  }
  render() {
    const { loggingIn, authenticated, component, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => {
        if (loggingIn) return <div></div>;
        return !authenticated ?
        (React.createElement(component, { ...props, loggingIn, authenticated })) :
        (<Redirect to="/dashboard" />);
      }} />
    );
  }
}

Public.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func,
};

export {
  Signup,
  Login
};
