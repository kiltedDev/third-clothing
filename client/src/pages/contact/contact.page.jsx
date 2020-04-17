import React from 'react';
import { connect } from 'react-redux';

import DetailDirectory from '../../components/detail-directory/detail-directory.component';
import { fetchContactDetailsStart } from '../../redux/contact/contact.actions.js';

import { ContactPageContainer, ContactHeader } from './contact.styles';

class ContactPage extends React.Component {
  componentDidMount() {
    const { fetchContactDetailsStart, hideCart } = this.props;
    fetchContactDetailsStart();
  }

  render() {
    return (
      <ContactPageContainer className='contact-page'>
        <ContactHeader
          children={ 'Reach out to learn more' }
        />
        <DetailDirectory />
      </ContactPageContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContactDetailsStart: () => dispatch( fetchContactDetailsStart() )
});

export default connect(null, mapDispatchToProps)(ContactPage);
