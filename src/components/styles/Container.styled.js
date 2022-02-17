import styled from "styled-components";

export const StyledContainer = styled.main`
  padding: 20px;
  padding-top: 50px;
  width: 350px;

  display: grid;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    padding: 40px;
    grid-template-columns: repeat(4, 1fr);
    width: auto;
    min-height: 500px;
    max-width: 1200px;

    padding-top: 20px;
  }
`;

export const SpanRow2 = styled.div`
  grid-row: span 2;
`;
