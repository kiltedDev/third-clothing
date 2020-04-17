import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import Icon from '../../icons/icon.index';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className='cart-icon' onClick={ toggleCartHidden }>
    <Icon className='shopping-icon' title='shopping-bag' />
    <span className='item-count'>{ itemCount }</span>
  </div>
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
