import React from 'react';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';

export default QueryLink = (props) => (
  <Link {...props} to={{ ...props.to, search: stringify(props.to.query) }}/>
);