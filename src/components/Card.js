import { BiDotsHorizontalRounded } from "react-icons/bi";

import {
  ActivityInfo,
  ActivityLastTimeInfo,
  CardActivityTime,
  CardActivityTitle,
  CardButton,
  CardInfo,
  CardWrapper,
  LastTimeInfo,
} from "./styles/Card.styled";

const Card = (props) => {
  const { title, timeframes, timeFrameActive, url } = props;

  const realTimeFrameActive = timeFrameActive.timeFrame;

  const currenttime = timeframes[timeFrameActive.timeFrame].current;
  const previousTime = timeframes[timeFrameActive.timeFrame].previous;

  const setTextForTimeFrame = (tf) => {
    let realTF = "";
    switch (true) {
      case tf === "daily":
        realTF = "Yesterday - ";
        break;

      case tf === "weekly":
        realTF = "Last Week - ";
        break;

      case tf === "monthly":
        realTF = "Last Month - ";
        break;
      default:
        break;
    }
    return realTF;
  };

  return (
    <CardWrapper bgColor={props.bgColor} url={url}>
      <CardInfo>
        <ActivityInfo>
          <CardActivityTitle>{title}</CardActivityTitle>
          <CardButton>
            {" "}
            <BiDotsHorizontalRounded />{" "}
          </CardButton>
        </ActivityInfo>

        <ActivityLastTimeInfo>
          <CardActivityTime>
            {currenttime === 1 ? `${currenttime}Hr` : `${currenttime}Hrs`}
          </CardActivityTime>
          <LastTimeInfo>
            {setTextForTimeFrame(realTimeFrameActive)}{" "}
            {previousTime === 1 ? `${previousTime}Hr` : `${previousTime}Hrs`}
          </LastTimeInfo>
        </ActivityLastTimeInfo>
      </CardInfo>
    </CardWrapper>
  );
};

export default Card;
