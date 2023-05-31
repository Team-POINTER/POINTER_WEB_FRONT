const flex = (direction, justify, align) => {
  return `
        display : flex;
        flex-direction : ${direction && direction};
        justify-content : ${justify && justify}
        align-items : ${align && align};
    `;
};

const Flex = () => {
  return `
    display: flex;
  `;
};

const jCenter = () => {
  return `
    justify-content: center;
  `;
};

const aCenter = () => {
  return `
    align-items: center;
  `;
};

const FlexCenter = () => {
  return `
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

const Font = (size, lineHeight, weight) => {
  return `
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-size: ${size}px;
        font-weight: ${weight};
        line-height: ${lineHeight}px;
    `;
};

const Body = (bold) => {
  return `
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: ${bold ? 700 : 500};
    font-size: 16px;
    line-height: 24px;

  `;
};

const Label = (bold) => {
  return `
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: ${bold ? 700 : 500};
    font-size: 14px;
    line-height: 20px;

  `;
};

const LabelXS = (bold) => {
  return `
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: ${bold ? 700 : 500};
    font-size: 12px;
    line-height: 18px;
  `;
};

const H1 = () => {
  return `
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 40px;
    `;
};

const H2 = () => {
  return `
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
    `;
};

const H3 = () => {
  return `
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    `;
};

const colors = {
  primary_5: "rgba(0, 175, 142, 0.05)",
  primary_10: "rgba(0, 175, 142, 0.1)",
  primary_20: "rgba(0, 175, 142, 0.2)",
  primary: "#00AF8E",
  primary_dark: "#00997D",
  purple: "#671BB2",
  purple_10: "rgba(103, 27, 178, 0.1)",
  purple_20: "rgba(103, 27, 178, 0.2)",
  red: "#DC3545",
  blue: "#395FE5",
  blue_10: "rgba(57, 95, 230, 0.1)",
  cyan: "#17A2B8",
  cyan_10: "rgba(23, 162, 184, 0.1)",
  warning_yellow: "#F2D024",
  warning_red: "#DC3545",
  black: "#000000",
  black_25: "rgba(0, 0, 0, 0.25)",
  black_10: "rgba(0, 0, 0, 0.1)",
  white: "#ffffff",
  white_25: "rgba(255, 255, 255, 0.25)",
  yellow: "#F2D024",
  gray100: "#172D44",
  gray200: "#3A4A59",
  gray300: "#6C757D",
  gray400: "#979CA4",
  gray500: "#C1C5CB",
  gray600: "#D7DADE",
  gray700: "#E8EAED",
  gray800: "#F2F3F5",
  gray900: "#F9FAFC",
};

const scrollX = () => {
  return `
    overflow-x: scroll;
    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `;
};

const scrollY = () => {
  return `
    overflow-y: scroll;
    & {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `;
};

const size = {
  mobile: "390px",
  tablet: "834px",
  desktop: "1920px",
};

const theme = {
  scrollY,
};

export default theme;
