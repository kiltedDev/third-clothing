import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import {  emptyCart } from '../../redux/cart/cart.actions';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price, emptyCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_9Q1859NfYRDnUxfSmuikoKYZ00994okTBL';

  const onToken = token => {
    console.log(token);
    // saveOrderOnDB() <= eventual function prolly
    emptyCart();
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

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch( emptyCart() )
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
