import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  button {
    max-width: 18vw;
  }
  @media screen and (max-width: 800px) {
    width: 90vw;
    button {
      min-width: unset;
    }
  }
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`

export const SignInButtonsContainer = styled.div`
  display:flex;
  justify-content: space-between;
`
