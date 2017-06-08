import React from 'react';
import { Meteor } from 'meteor/meteor';

export default ({ _id, ...props }) => {
  const user = Meteor.users.findOne(_id);
  
  return (
    <span {...props}>{user.username}</span>
  );
}

