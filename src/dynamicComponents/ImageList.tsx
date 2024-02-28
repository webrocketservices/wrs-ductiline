import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { imageListComponent, imageListCell } from "../styles/";
import { ImageItem, WebContentItem } from "../types";
import ImageItemContent from "./ImageItemContent";
type CompProps = {
  data: WebContentItem;
};

export default function ImageList({ data }: CompProps) {
  return (
    <Box
      component="section"
      bgcolor={data.Config.CustomStyle?.bgColor}
      sx={imageListComponent}
    >
      <Grid container>
        {data.ImageList?.title ? (
          <Grid item xs={12} textAlign="center" m={4}>
            <Typography variant="h3">{data.ImageList.title}</Typography>
          </Grid>
        ) : null}
        {data.ImageList?.List.map((item: ImageItem, index: number) => {
          return (
            <Grid item key={index} sx={imageListCell}>
              <ImageItemContent data={item} sx={{ maxWidth: "60px" }} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
