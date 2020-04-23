import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import Icon from '../../icons/icon.index';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount
} from './cart-icon.styles';

export const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <CartIconContainer
    className='cart-icon'
    onClick={ toggleCartHidden }
    >
    <ShoppingIcon
      className='shopping-icon'
      title='shopping-bag'
    />
    <ItemCount
      className='item-count'
      children={ itemCount }
    />
  </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch( toggleCartHidden() )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
