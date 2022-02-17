import React from "react";
import {
  CardHeader,
  CardHeaderImg,
  CardHeaderInfo,
  CardPersonWrapper,
  CardTimeFrame,
  InputGroupRadio,
} from "./styles/CardPerson.styled";

import personImg from "../images/image-jeremy.png";

const CardPerson = (props) => {
  return (
    <CardPersonWrapper>
      <CardHeader>
        <CardHeaderImg src={personImg} />
        <CardHeaderInfo>
          <p>
            Report for <br /> <span>Jeremy Robson</span>
          </p>
        </CardHeaderInfo>
      </CardHeader>
      <CardTimeFrame>
        <InputGroupRadio active={props.timeFrameActive.timeFrame === "daily"}>
          <label htmlFor="daily-input">Daily</label>
          <input
            type="radio"
            id="daily-input"
            value="daily"
            checked={props.timeFrameActive.timeFrame === "daily"}
            name="timeFrame"
            onChange={(e) => props.handleChangeTimeFrame(e)}
          />
        </InputGroupRadio>

        <InputGroupRadio active={props.timeFrameActive.timeFrame === "weekly"}>
          <label htmlFor="weekly-input">Weekly</label>
          <input
            type="radio"
            id="weekly-input"
            value="weekly"
            checked={props.timeFrameActive.timeFrame === "weekly"}
            name="timeFrame"
            onChange={(e) => props.handleChangeTimeFrame(e)}
          />
        </InputGroupRadio>

        <InputGroupRadio active={props.timeFrameActive.timeFrame === "monthly"}>
          <label htmlFor="monthly-input">Monthly</label>
          <input
            type="radio"
            id="monthly-input"
            value="monthly"
            checked={props.timeFrameActive.timeFrame === "monthly"}
            name="timeFrame"
            onChange={props.handleChangeTimeFrame}
          />
        </InputGroupRadio>
      </CardTimeFrame>
    </CardPersonWrapper>
  );
};

export default CardPerson;
