import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;
    & > div {
      max-width: 1200px;
      margin: auto;
    }
    @media screen and (max-width: 800px) {
      padding: 0 10px 10px 10px;
    }
  }

  a {
    text-decoration: none;
    color:black;
  }

  * {
    box-sizing: border-box;
  }

  main {
    margin-top: 90px
  }
`
