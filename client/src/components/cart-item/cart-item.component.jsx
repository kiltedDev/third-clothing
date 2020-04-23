import React from 'react';

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  CartItemPrice
} from './cart-item.styles';

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer className='cart-item'>
      <CartItemImage src={ imageUrl } alt={ name } />
      <CartItemDetails className='item-details' >
        <CartItemName className='name' children={ name } />
        <CartItemPrice className='price' children={ `${quantity} x $${price}` } />
    </CartItemDetails>
  </CartItemContainer>
  )
}

export default React.memo( CartItem );
