import styled from "styled-components";

export const MainWrapper = styled.main`
  margin-top: -40px;
  /* margin-bottom: 40px; */
  height: 600px;
  width: 560px;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 320px;
  }
`;
