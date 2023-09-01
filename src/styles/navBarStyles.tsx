export const navBarComponent = (props: any) => {
  return {
    backgroundColor: props.menuTransparent
      ? "brandPrimary.main"
      : "transparent",
    boxShadow: props.menuTransparent ? 3 : 0,
    transition: "all 1s ease-in",
    position: "fixed",
    a: {
      fontSize: "1.2em",
      color: "brandPrimary.contrastText",
    },
  };
};

export const mainLogo = {
  height: "60px",
  my: 2,
  img: {
    height: "100%",
  },
  "@media (max-width: 670px)": {
    height: "40px",
  },
};
