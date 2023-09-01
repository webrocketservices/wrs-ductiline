export const pageHeaderWrapper = (props: any) => {
  return {
    backgroundColor: props.bgColor,
    height: "550px",
    position: "relative",
    overflow: "hidden",
    // border: "1px solid blue",
    img: {
      filter: "blur(3px)",
      width: "100%",
      height: "auto",
      transform: "translate(0,-30%)",
      opacity: 0.6,
      "@media (max-width: 600px)": {
        height: "100%",
        width: "auto",
        transform: "translate(-50%,-50%)",
      },
    },
    h2: {
      color: "brandPrimary.contastText",
      fontWeight: "bold",
      px: 8,
      position: "relative",
      "@media (max-width: 600px)": { px: 1 },
      "&::after": {
        content: "''",
        borderBottom: "2px solid white",
        borderColor: "brandPrimary.contastText",
        position: "absolute",
        top: "50%",
        right: 0,
        width: "50px",
        "@media (max-width: 600px)": { all: "revert" },
      },
      "&::before": {
        content: "''",
        borderBottom: "2px solid white",
        borderColor: "brandPrimary.contastText",
        position: "absolute",
        top: "50%",
        left: 0,
        width: "50px",
        "@media (max-width: 600px)": { all: "revert" },
      },
    },
  };
};

export const pageHeaderOverlay = () => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
};
