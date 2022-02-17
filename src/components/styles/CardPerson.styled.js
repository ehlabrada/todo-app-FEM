import styled from "styled-components";

export const CardPersonWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 190px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  display: flex;
  flex-direction: column;
  justify-content: end;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    height: 100%;
    width: 200px;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 67%;

  border-radius: 12px;
  padding: 25px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  top: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    flex-direction: column;
  }
`;

export const CardHeaderImg = styled.img`
  max-width: 70px;
  border-radius: 50%;
  border: 1px solid white;
  margin-right: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    align-self: flex-start;
    margin-right: none;
  }
`;

export const CardHeaderInfo = styled.div`
  color: ${({ theme }) => theme.colors.paleBlue};

  p {
    line-height: 1.5em;
  }

  span {
    font-size: 1.9rem;
    font-weight: 500;

    @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
      font-size: 2.35rem;
      line-height: 2.2rem;
    }
  }
`;

export const CardTimeFrame = styled.form`
  padding: 25px 32px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  align-self: flex-end;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 30%;
  }
`;

export const InputGroupRadio = styled.div`
  label {
    /* background: ${(props) => (props.impo ? "white" : "red")}; */
    color: ${(props) =>
      props.active
        ? props.theme.colors.paleBlue
        : props.theme.colors.desaturatedBlue};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors.paleBlue};
    }
  }

  input {
    display: none;

    color: ${(props) => (props.active ? "white" : "red")};
  }
`;
