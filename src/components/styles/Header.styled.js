import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 10px 20px;
  /* color: ${({ theme }) => (theme === "light" ? "red" : "green")}; */

  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.4rem;
  padding: 5px;
  letter-spacing: 5px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.header.textColor};
`;

export const HeaderModeIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;

  align-self: center;
`;
