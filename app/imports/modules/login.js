/**
 * @Author: philip
 * @Date:   2017-05-27T17:59:21+00:00
 * @Filename: login.js
 * @Last modified by:   philip
 * @Last modified time: 2017-05-27T20:06:21+00:00
 */


import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const getUserData = () => ({
  email: document.querySelector('[name="emailAddress"]').value,
  password: document.querySelector('[name="password"]').value
});

const login = () => {
  const { email, password } = getUserData();

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('Logged in!', 'success');
      
      const { location } = component.props;
      if (location.state && location.state.nextPathname) {
        browserHistory.push(location.state.nextPathname);
      } else {
        // browserHistory.push('/');
      }
    }
  });
};

const validate = () => {
  $(component.loginForm).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
      },
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Need a password here.',
      },
    },
    submitHandler() { login(); },
  });
};

export default function handleLogin(options) {
  component = options.component;
  validate();
}
