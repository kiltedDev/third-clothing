import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems }  from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartDropdownItems,
  CartDropdownButton,
  EmptyMessage
} from './cart-dropdown.styles'

export const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer className='cart-dropdown'>
    <CartDropdownItems
      className='cart-items'
      children={
        cartItems.length
        ? cartItems.map( cartItem => (
          <CartItem
            key={ cartItem.id}
            item={ cartItem }
          />
        )) : (
          <EmptyMessage
            className='empty-message'
            children='Your cart is empty'
          />
        )
      }
    />
  <CartDropdownButton
      onClick={() => {
        history.push( '/checkout' );
        dispatch( toggleCartHidden() );
      }}
      children='GO TO CHECKOUT'
    />
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
