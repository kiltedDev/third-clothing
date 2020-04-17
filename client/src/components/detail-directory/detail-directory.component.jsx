import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectContactDetailsForSharing } from '../../redux/contact/contact.selectors';

import ContactItem from '../contact-item/contact-item.component';

import './detail-directory.styles.scss';

const DetailDirectory = ({ contactDetails }) => (
  <div className='detail-directory'>
    {contactDetails.map(({ id, ...otherProps }) => (
      <ContactItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetailsForSharing
});

export default connect(mapStateToProps)(DetailDirectory);
