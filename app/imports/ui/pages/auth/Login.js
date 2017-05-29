/**
 * @Author: philip
 * @Date:   2017-05-27T16:51:32+00:00
 * @Filename: Login.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-29T09:06:18+00:00
 */



import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import handleLogin from '../../../modules/login';

export default class Signup extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="loginColumns animated fadeInDown">
        <div className="row"> 
          <div className="col-md-6">
            <h2 className="font-bold">Welcome to IN+</h2>
            <p>
              Perfectly designed and precisely prepared admin theme with over 50 pages 
              with extra new web app views.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p>
              When an unknown printer took a galley of type and scrambled it to make a 
              type specimen book.
            </p>
            <p>
              <small>
                It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged.
              </small>
            </p>
            
          </div>
          <div className="col-md-6">
            <div className="ibox-content">
              <form
                ref={ form => (this.loginForm = form) }
                className="m-t"
                onSubmit={ this.handleSubmit }
              >
                <FormGroup>
                  <FormControl
                    type="email"
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
                <Button type="submit" bsStyle="success" className="btn-primary block full-width m-b">Login</Button>
                
                <a href="#">
                  <small>Forgot password?</small>
                </a>
                
                <p className="text-muted text-center">
                  <small>Do not have an account?</small>
                </p>
                <Link to="/signup" className="btn btn-sm btn-white btn-block">Create an account</Link>
              </form>
              <p className="m-t">
                <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
              </p>
            </div>
          </div>
        </div>
        <hr/>
      <div className="row">
          <div className="col-md-6">
            Copyright Example Company
          </div>
          <div className="col-md-6 text-right">
            <small>© 2014-2015</small>
          </div>
        </div>
      </div>
    );
  }
}
