import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className='menu-item'
    size={ size }
    onClick={ () =>
      history.push(`${match.url}${linkUrl}`)
    }
    >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={ imageUrl }
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
