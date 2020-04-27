import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  clearItemFromCart,
  removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return(
    <CheckoutItemContainer className='checkout-item'>
      <ImageContainer
        className='image-container'
        children={
          <img src={ imageUrl } alt={ name } />
        }
      />
      <TextContainer className='name' children={ name } />
      <QuantityContainer className='quantity'>
        <div onClick={() => removeItem( cartItem ) } className='arrow left'>&#10094;</div>
        <span className='value'>{ quantity }</span>
        <div onClick={() => addItem( cartItem ) } className='arrow right'>&#10095;</div>
      </QuantityContainer>
      <TextContainer className='price' children={ `$${ price }` } />
      <RemoveButtonContainer
        className='remove-button'
        onClick={() => clearItem(cartItem)} >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
