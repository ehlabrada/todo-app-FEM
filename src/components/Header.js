// Files imported
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

import {
  HeaderModeIcon,
  HeaderTitle,
  StyledHeader,
} from "./styles/Header.styled";

const Header = (props) => {
  const srcImg = props.actualTheme === "light" ? iconMoon : iconSun;
  return (
    <StyledHeader>
      <HeaderTitle actualTheme={props.actualTheme}>TODO</HeaderTitle>
      <HeaderModeIcon
        src={srcImg}
        alt="header-icon"
        onClick={props.handleChangeTheme}
      />
    </StyledHeader>
  );
};

export default Header;
