import React from 'react';
import { withRouter } from 'react-router-dom';

import Icon from '../../icons/icon.index.js';

import {
  ContactItemContainer,
  ContactItemIcon,
  ContentContainer,
  ContactTitle,
  ContactSubtitle
} from './contact-item.styles';

const ContactItem = ({ title, contactInfo, iconUrl, linkTo, iconSize }) => (
  <ContactItemContainer
    className='contact-item'
  >
    <ContentContainer className='content'>
      <ContactItemIcon
        href={ linkTo }
        className='contact-icon'
        iconSize={ iconSize }
      >
      <Icon title={ title } />
    </ContactItemIcon>
      <ContactTitle
        className='title'
        children={ title.toUpperCase() }
      />
      <ContactSubtitle
        name={ contactInfo }
        href={ linkTo }
        className='deets'
        children={ contactInfo }
      />
    </ContentContainer>
  </ContactItemContainer>
)

export default withRouter( ContactItem );
