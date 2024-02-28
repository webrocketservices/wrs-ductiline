export const sectionComponent = (props: any) => {
  const baseStyle = {
    minHeight: "500px",
    px: 5,
    py: 8,
    backgroundColor: props.bgColor,
  };
  const style = {
    ...baseStyle,
    ...(!props.bgImg ? null : imgBgStyle(props.bgImg)),
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
