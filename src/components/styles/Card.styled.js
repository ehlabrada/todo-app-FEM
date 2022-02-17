import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 12px;
  border: none;
  outline: none;

  background-color: ${(props) => props.bgColor || "white"};

  /* SVG ICON */
  background-image: url(${(props) => `../.${props.url}`});
  background-repeat: no-repeat;
  background-position: top right 10%;
  background-size: 50px;

  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    height: 220px !important;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 82%;
  position: absolute;
  bottom: 0;
  padding: 30px 15px;
  border-radius: 10px 10px 8px 8px;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.desaturatedBlue};
    }
  }
`;

export const ActivityInfo = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.colors.paleBlue};
  font-weight: ${({ theme }) => theme.font.weights.bold};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardActivityTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  font-weight: 400;
  /* align-self: center; */
`;
export const CardActivityTime = styled.h2`
  font-size: 1.7rem;
  font-weight: 300;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    font-size: 2.8rem;
  }
`;

export const ActivityLastTimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.paleBlue};

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    flex-direction: column;
  }
`;
export const CardButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
`;
export const LastTimeInfo = styled.p`
  font-size: 16px;
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.medium}) {
    align-self: flex-start;
  }
`;
