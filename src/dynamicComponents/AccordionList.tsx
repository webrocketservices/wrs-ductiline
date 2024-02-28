import { Typography } from "@mui/material/";
import { Box, Grid } from "@mui/material";
import { AccordionList as AccordionListType } from "../types";
import AccordionPanel from "./AccordionPanel";
import { sectionComponent } from "../styles";

// const accordionArray = [
//   {
//     summary: {
//       imgUrl: "/img/articulos/Tee-campana---brida.png",
//       title: "Tees con bridas",
//       subTitle: "son 8 productos",
//     },
//     content: {
//       title: "Tees con bridas",
//       subTitle: "son 8 productos",
//       list: [
//         {
//           text: "Tees del 1",
//           linkUrl: "google.com",
//         },
//         {
//           text: "Tees del 2",
//           linkUrl: "google.com",
//         },
//         {
//           text: "Tees del 3",
//           linkUrl: "google.com",
//         },
//         {
//           text: "Tees del 4",
//           linkUrl: "google.com",
//         },
//       ],
//     },
//   },
//   {
//     summary: {
//       imgUrl: "/img/articulos/Tee-campana---brida.png",
//       title: "Tees con bridas",
//       subTitle: "son 8 productos",
//     },
//     content: {
//       title: "Tees con bridas",
//       subTitle: "son 8 productos",
//       list: [
//         {
//           text: "Tees del 1",
//           linkUrl: "google.com",
//           // Image: {
//           //   cols: 0,
//           // },
//         },
//         {
//           text: "Tees del 2",
//           linkUrl: "google.com",
//         },
//         {
//           text: "Tees del 3",
//           linkUrl: "google.com",
//         },
//         {
//           text: "Tees del 4",
//           linkUrl: "google.com",
//         },
//       ],
//     },
//   },
// ];
type CompProps = {
  data: any;
};

export default function AccordionList({ data }: CompProps) {
  console.log(data.AccordionList);
  return (
    <Box
      component="section"
      sx={sectionComponent({
        bgImg: data.Config.CustomStyle?.bgImgUrl,
        bgColor: data.Config.CustomStyle?.bgColor,
      })}
    >
      <Grid container rowSpacing={5} maxWidth="1300px" mx="auto">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" m={{ sm: 1, md: 4 }}>
            {data.Content?.title}
          </Typography>
          <Typography variant="h4" m={2}>
            {data.Content?.subTitle}
          </Typography>
          <Typography m={2}>{data.Content?.text}</Typography>
        </Grid>
        <Grid xs={12}>
          {data.AccordionList
            ? data.AccordionList.map(
                (item: AccordionListType, index: number) => {
                  return (
                    <Box key={index}>
                      {item.title ? (
                        <Typography variant="h4" pb={2}>
                          {item.title}
                        </Typography>
                      ) : null}
                      <AccordionPanel data={item.AccordionItems} />
                    </Box>
                  );
                }
              )
            : null}
        </Grid>
      </Grid>
    </Box>
  );
}
