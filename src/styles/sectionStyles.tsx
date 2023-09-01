export const sectionComponent = (props: any) => {
  const baseStyle = {
    minHeight: "500px",
    px: 5,
    py: 8,
    backgroundColor: props.bgColor,
  };
  const style = {
    ...baseStyle,
    ...(!props.bgImg ? dotsBgStyle : imgBgStyle(props.bgImg)),
  };
  return style;
};

const imgBgStyle = (bgImg: any) => {
  return {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "auto 100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };
};

const dotsBgStyle = {
  backgroundImage: "radial-gradient(#212121 10%, transparent 0%)",
  backgroundPosition: " 0 0, 5px 5px",
  backgroundSize: "10px 10px",
};
