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
        return (
          <Grid container key={index} mb={{ sm: 0, lg: 2 }} mx="auto">
            {item.Image ? (
              <Grid item xs={2} textAlign="center" p={1}>
                <ImageItemContent data={item.Image} sx={{ maxWidth: "40px" }} />
              </Grid>
            ) : null}
            {item.muiIcon ? (
              <Grid item xs={2} textAlign="center" p={1}>
                <DynamicIcon iconName={item.muiIcon} size="large" />
              </Grid>
            ) : null}
            <Grid
              item
              xs={item.Image || item.muiIcon ? 10 : 12}
              mx="auto"
              p={1}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body1">{item.text}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
