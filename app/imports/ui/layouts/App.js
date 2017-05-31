/**
 * @Author: philip
 * @Date:   2017-05-27T16:34:46+00:00
 * @Filename: App.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-31T10:07:28+00:00
 */


import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Index from '../pages/Index';
import Public, { Signup, Login } from '../pages/auth';
import Authenticated, {
  Dashboard,
  Annotations
} from '../pages/user';
import NewsRoomView from '../containers/NewsRoomView';
import Favourites from '../containers/Favourites';
import 'text-spinners/spinners.css';
// import RecoverPassword from '../pages/RecoverPassword';
// import ResetPassword from '../pages/ResetPassword';
// import NotFound from '../pages/NotFound';

const App = appProps => (
  <Router>
    <div className="Trive">
      <Switch>
        <Public exact name="index" path="/" component={Login} {...appProps} />
        <Route exact name="index" path="/test" component={Index} />
        <Authenticated exact path="/dashboard" component={Dashboard} {...appProps} />
        <Authenticated exact path="/dashboard/favourites" component={Favourites} {...appProps} />
        <Authenticated exact path="/dashboard/annotations" component={Annotations} {...appProps} />
        <Authenticated exact path="/dashboard/:tag/:rss_id?" component={NewsRoomView} {...appProps} />
        {/* <Authenticated exact path="/documents/new" component={NewDocument} {...appProps} />
        <Authenticated exact path="/documents/:_id/edit" component={EditDocument} {...appProps} /> */}
        <Public path="/signup" component={Signup} {...appProps} />
        <Public path="/login" component={Login} {...appProps} />
        {/* <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
        <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
};

const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default composeWithTracker(composer)(App);