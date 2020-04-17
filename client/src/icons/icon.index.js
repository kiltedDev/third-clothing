import React from 'react';
import {default as Email } from './email.icon';
import {default as Github } from './github.icon';
import {default as LinkedIn } from './linkedin.icon';
import {default as Horn } from './horn.icon';
import {default as ShoppingBag } from './shopping-bag.icon';

const Icon = props => {
  switch(props.title) {
    case "horn":
      return <Horn {...props} />;
    case "shopping-bag":
      return <ShoppingBag {...props} />;
    case "email":
      return <Email {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "github":
      return <Github {...props} />;
    default:
      return <div />;
  }
}
export default Icon;
