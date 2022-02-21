import { createGlobalStyle } from "styled-components";
import bgLightImg from "../../images/bg-desktop-light.jpg";
import bgDarkImg from "../../images/bg-desktop-dark.jpg";
import lightImgMobile from "../../images/bg-mobile-light.jpg";
import darkImgMobile from "../../images/bg-mobile-dark.jpg";

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    font-family: 'Josefin Sans', sans-serif;
  }
  
  body {
    width: 100%;
    height: 100vh;

    transition: all 0.4s ease;
    font-size: ${({ theme }) => theme.font.size};
    
    background-color: ${({ theme }) => theme.colors.bg};
    background-image: ${(props) =>
      props.actualTheme === "light"
        ? `url(${bgLightImg})`
        : `url(${bgDarkImg})`};
    background-repeat: no-repeat;
    background-size: 100% 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      padding-bottom: 40px;
      background-image: ${(props) =>
        props.actualTheme === "light"
          ? `url(${lightImgMobile})`
          : `url(${darkImgMobile})`};
    }
  }
`;

export default GlobalStyle;
