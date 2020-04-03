import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  button {
    margin-top: auto;
  }
  @media screen and (max-width: 800px) {
    width: calc(100vw - 20px);
    right: 0px;
    height: 80vh;
    top:70px;
  }
`

export const CartDropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  // overflow: scroll;
  @media screen and (max-width: 800px) {
    height: 75vh;
  }

`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
