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

const M_18 = () => {
  return `
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
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
  black: "#000000",
  white: "#ffffff",
  yellow: "#F2D024",
  gray70: "#605F5F",
  orangered: "#FF2301",
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
  colors,
  M_18,
};

export default theme;
