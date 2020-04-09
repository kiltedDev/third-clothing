import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  SectionItemContainer,
  SectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './section-item.styles';

const SectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <SectionItemContainer className='section-item'>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <SectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </SectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </SectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(SectionItem);
