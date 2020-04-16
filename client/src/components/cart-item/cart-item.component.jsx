import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name } }) => {
  return (
    <div className='cart-item'>
      <img src={ imageUrl } alt={ name } />
      <div className='item-details'>
        <span className='name'>{ name }</span>
        <span className='price'>${ price }</span>
      </div>
    </div>
  )
}

export default React.memo( CartItem );
