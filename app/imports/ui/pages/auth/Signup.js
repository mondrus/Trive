/**
 * @Author: philip
 * @Date:   2017-05-27T16:51:26+00:00
 * @Filename: Signup.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T17:41:50+00:00
 */


import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleSignup from '../../../modules/signup';

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    console.log(this.signupForm);
  }

  render() {
    return (
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <h1 className="logo-name">IN+</h1>
        </div>
        <h3>Register to IN+</h3>

        <p>Create account to see it in action.</p>
        <form
          ref={ form => (this.signupForm = form) }
          onSubmit={ this.handleSubmit }
          className="m-t"
        >
          <FormGroup>
            <FormControl
              type="text"
              ref="username"
              name="username"
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel><input type="checkbox" /><i></i> Agree the terms and policy</ControlLabel>
          </FormGroup>
          <Button type="submit" bsStyle="success" className="btn-primary block full-width m-b">Sign Up</Button>
          <p className="text-muted text-center">
              <small>Already have an account?</small>
          </p>
          <Link to="/login" className="btn btn-sm btn-white btn-block">Log In</Link>
        </form>
        <p className="m-t">
            <small>Inspinia we app framework base on Bootstrap 3 &copy; 2017</small>
        </p>
      </div>
    );
  }
}
