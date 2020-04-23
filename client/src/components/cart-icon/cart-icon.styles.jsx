import styled from 'styled-components';

import Icon from '../../icons/icon.index';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }
`

export const ShoppingIcon = styled(Icon)`
  width: 24px;
  height: 24px;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`

CartIconContainer.displayName = 'CartIconContainer';
ShoppingIcon.displayName = 'ShoppingIcon';
ItemCount.displayName = 'ItemCount';
