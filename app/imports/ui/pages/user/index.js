/**
 * @Author: philip
 * @Date:   2017-05-27T19:35:40+00:00
 * @Filename: index.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T14:10:58+00:00
 */


import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import NewsRoomView from './NewsRoomView';
import UserDashboard from '../../layouts/UserDashboard';
import Favourites from './Favourites';
import Annotations from './Annotations';

export default ({ loggingIn, authenticated, component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (loggingIn) return <div></div>;
    return authenticated ?
    (<UserDashboard component={component} loggingIn={loggingIn} authenticated={authenticated} {...props} />) :
    (<Redirect to="/login" />);
  }} />
);

export {
  Dashboard,
  NewsRoomView,
  Favourites,
  Annotations
}
