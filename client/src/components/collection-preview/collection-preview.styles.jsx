import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`

export const CollectionPreviewTitle = styled( Link )`
font-size: 28px;
margin-bottom: 25px;
font-weight: 600;
text-transform: uppercase;
@media screen and ( min-width: 801px ) {
  &:hover {
    color: gray;
    cursor: pointer;
  }
}
`

export const CollectionPreviewPanel = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat( 4, 1fr );
    grid-gap: 15px;
    .menu-item, .collection-item {
      grid-column: span 2;
      &:nth-last-child(1):nth-child(odd) {
        grid-column: 2 / span 2;
      }
    }
  }
`
