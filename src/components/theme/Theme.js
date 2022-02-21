const bothColors = {
  brightBlue: "hsl(220, 98%, 61%)",
  checkBackground: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
};

export const LightTheme = {
  colors: {
    brightBlue: "hsl(220, 98%, 61%)",
    checkBackground: bothColors.checkBackground,
    veryLightGray: "hsl(0, 0%, 98%)",
    veryLightGrayishBlue: "hsl(236, 33%, 92%)",
    lightGrayishBlue: "hsl(233, 11%, 84%)",
    darkGrayishBlue: "hsl(236, 9%, 61%)",
    veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
    red: "hsl(0, 100%, 50%)",
    white: "hsl(0, 0%, 100%)",
    bg: "hsl(0, 0%, 98%)",
    header: {
      textColor: "hsl(0, 0%, 98%)",
    },
    input: {
      bg: "hsl(0, 0%, 98%)",
      textColor: "hsl(235, 19%, 35%)",
    },
    todoItem: {
      bg: "hsl(0, 0%, 98%)",
      textColor: "hsl(235, 19%, 35%)",
    },
    option: {
      textColor: "hsl(236, 9%, 61%)",
      textHover: "hsl(235, 19%, 35%)",
    },
    todoBorder: "rgba(72, 75, 106, 0.2);",
  },
  font: {
    size: "18px",
    weights: {
      normal: "400",
      bold: "700",
    },
  },
};

export const DarkTheme = {
  colors: {
    brightBlue: bothColors.brightBlue,
    checkBackground: bothColors.checkBackground,
    veryDarkBlue: "hsl(235, 21%, 11%)",
    veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
    lightGrayishBlue: "hsl(234, 39%, 85%)",
    lightGrayishBlueHover: "hsl(236, 33%, 92%)",
    darkGrayishBlue: "hsl(234, 11%, 52%)",
    veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
    veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
    red: "hsl(0, 100%, 50%)",
    white: "hsl(0, 0%, 100%)",
    bg: "hsl(235, 21%, 11%)",
    header: {
      textColor: "hsl(0, 0%, 98%)",
    },
    input: {
      bg: "hsl(235, 24%, 19%)",
      textColor: "hsl(234, 39%, 85%)",
    },
    todoItem: {
      bg: "hsl(235, 24%, 19%)",
      textColor: "hsl(234, 39%, 85%)",
    },
    option: {
      textColor: "hsl(235, 19%, 35%)",
      textHover: "hsl(234, 39%, 85%)",
    },
    todoBorder: "rgba(202, 205, 232, 0.2)",
  },
  font: {
    size: "18px",
    weights: {
      normal: "400",
      bold: "700",
    },
  },
};
