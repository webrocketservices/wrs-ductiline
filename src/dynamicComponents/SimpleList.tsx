import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { ListItem } from "../types";
import ImageItemContent from "./ImageItemContent";
import DynamicIcon from "./DynamicIcon";

type CompProps = {
  data: ListItem[];
};
export default function SimpleList({ data }: CompProps) {
  return (
    <>
      {data.map((item: ListItem, index: number) => {
        let imgCols = 2;
        if (item.Image && item.Image.cols) {
          imgCols = item.Image.cols;
        }
        return (
          <Grid container key={index} mx="auto">
            {item.Image ? (
              <Grid item xs={imgCols} textAlign="center" p={1}>
                <ImageItemContent data={item.Image} sx={{ maxWidth: "75%" }} />
              </Grid>
            ) : null}
            {item.muiIcon ? (
              <Grid item xs={2} textAlign="center" p={1}>
                <DynamicIcon iconName={item.muiIcon} size="large" />
              </Grid>
            ) : null}
            <Grid
              item
              xs={item.Image || item.muiIcon ? 12 - imgCols : 10}
              mx="auto"
              p={1}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body1" mt={2}>
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
