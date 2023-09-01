// export const sectionHeader = {
//   backgroundColor: "black",
//   position: "relative",
//   height: "1000px",
//   overflow: "hidden",
//   border: "1px solid blue",
// };
export const homeHeader = {
  backgroundColor: "black",
  position: "relative",
  height: "auto",
  overflow: "hidden",
};
export const headerOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  paddingTop: "0px",
  width: "100%",
  height: "100%",
  zIndex: 2,
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const headerVideo = {
  // position: "absolute",
  // top: 0,
  // left: 0,

  width: "100%",
  height: "auto",
  zIndex: 1,
};
export const bgHeaderVideo = {
  minHeight: "500px",
  // maxHeight: "1000px",
  height: "auto",
  width: "100%",
  opacity: "0.6",
  "@media (max-width: 1170px)": {
    maxHeight: "800px",
    height: "100%",
    width: "auto",
    marginLeft: "-25%",
  },
};
export const headerTitleWrapper = {
  maxWidth: "80%",
  "@media (max-width: 600px)": {
    maxWidth: "100%",
    padding: "20px",
  },
};
export const headerBtnCta = {
  padding: "10px",
  marginTop: "40px",
};
