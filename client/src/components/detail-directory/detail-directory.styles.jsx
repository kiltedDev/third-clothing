import styled from 'styled-components';

export const DirectoryMenu = styled.div`
  width: auto;
  margin: auto;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`

DirectoryMenu.displayName = 'DirectoryMenu';
