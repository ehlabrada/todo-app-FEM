import styled from "styled-components";

// Mobile
export const FilterOptionsMobileWrapper = styled.form`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    display: block;
    height: 40px;
    width: 250xp;
  }
`;

export const InputGroupRadio = styled.div`
  color: ${(props) => props.theme.colors.option.textColor};
  label {
    margin: 0 10px;
    cursor: pointer;

    color: ${(props) => props.active && "hsl(220, 98%, 61%)"};

    &:hover {
      color: ${(props) => props.theme.colors.option.textHover};
    }
  }

  input {
    display: none;
  }
`;
