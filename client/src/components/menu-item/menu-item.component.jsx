import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageURL, size, history, linkURL, match }) => (
  <MenuItemContainer
    className='menu-item'
    size={ size }
    onClick={ () =>
      history.push(`${match.url}${linkURL}`)
    }
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={ imageURL }
    />
    <ContentContainer className='content'>
      <ContentTitle
        className='title'
        children={ title.toUpperCase() }
      />
      <ContentSubtitle
        className='subtitle'
        children='SHOP NOW'
      />
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter( MenuItem );
