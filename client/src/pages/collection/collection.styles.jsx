import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`

export const CollectionPageTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

export const CollectionPageItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .section-item {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    display: grid;
	grid-template-columns: repeat( 4, 1fr );
    grid-gap: 15px;
    .menu-item {
      	grid-column: span 2;
    }
    .menu-item:nth-last-child(1):nth-child(odd) {
    	grid-column: 2 / span 2;
    }
  }
`
