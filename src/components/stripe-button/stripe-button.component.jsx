import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_9Q1859NfYRDnUxfSmuikoKYZ00994okTBL';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Third Clothing'
      billingAddress
      shipingAddress
      image='https://i.ibb.co/LR3mZZn/horn.png'
      description={ `Your total is $${price}` }
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  )
}

export default StripeCheckoutButton;
