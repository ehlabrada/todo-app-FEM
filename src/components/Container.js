import React from "react";
import Card from "./Card";
import CardPerson from "./CardPerson";
import { SpanRow2, StyledContainer } from "./styles/Container.styled";

const Container = (props) => {
  const cards = props.data.map((card, index) => {
    return (
      <Card key={index} {...card} timeFrameActive={props.timeFrameActive} />
    );
  });

  return (
    <StyledContainer>
      <SpanRow2>
        <CardPerson
          timeFrameActive={props.timeFrameActive}
          handleChangeTimeFrame={props.handleChangeTimeFrame}
        />
      </SpanRow2>
      {cards}
    </StyledContainer>
  );
};

export default Container;
