import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import {  clearCart } from '../../redux/cart/cart.actions';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_9Q1859NfYRDnUxfSmuikoKYZ00994okTBL';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        clearCart();
        alert( 'Payment successful');
      })
      .catch( error => {
        console.log( 'Payment error: ', error );
        alert(
          'There was an issue with your payment. Please make sure you used the provided test card.'
        )
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Third Clothing'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/LR3mZZn/horn.png'
      description={ `Your total is $${price}` }
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey }
      label='Pay Now'
    />
  )
}

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch( clearCart() )
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
