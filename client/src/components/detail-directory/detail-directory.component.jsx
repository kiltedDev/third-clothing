import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectContactDetailsForSharing } from '../../redux/contact/contact.selectors';

import ContactItem from '../contact-item/contact-item.component';

import { DirectoryMenu } from './detail-directory.styles';

export const DetailDirectory = ({ contactDetails }) => (
  <DirectoryMenu className='detail-directory'>
    {contactDetails.map(({ id, ...otherProps }) => (
      <ContactItem key={id} {...otherProps} />
    ))}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetailsForSharing
});

export default connect(mapStateToProps)(DetailDirectory);
