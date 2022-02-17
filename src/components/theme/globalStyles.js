import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }

  html {
    width: 100%;
  }



  body {
    
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.veryDarkBlue};

    display: flex;
    align-items: center;
    justify-content: center;

  }

`;

export default GlobalStyle;
