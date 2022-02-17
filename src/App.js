import { data } from "./data.js";

// Components
import Container from "./components/Container";

// Styles
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/theme/globalStyles";
import Theme from "./components/theme/Theme";
import { useState } from "react";

function App() {
  const [timeFrameActive, setTimeFrameActive] = useState({
    timeFrame: "daily",
  });

  console.log("TIMEFRAME", timeFrameActive);

  const handleChangeTimeFrame = (event) => {
    const { name, value } = event.target;

    setTimeFrameActive((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Container
          data={data}
          timeFrameActive={timeFrameActive}
          handleChangeTimeFrame={handleChangeTimeFrame}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
