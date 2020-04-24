import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  CheckoutTotal,
  HeaderBlock,
  TestWarning
} from './checkout.styles';

export const CheckoutPage = ({ cartItems, cartTotal }) => {
  return(
    <CheckoutPageContainer className='checkout-page'>
      <CheckoutHeader className='checkout-header'>
        <HeaderBlock className='header-block'>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock className='header-block'>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
        )
      }
      <CheckoutTotal
        className='total'
        Children={ `Total: ${ cartTotal }` }
      />
    <TestWarning className='test-warning'>
        * Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242
        <br />
        Exp: 01/24 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={ cartTotal } />
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
