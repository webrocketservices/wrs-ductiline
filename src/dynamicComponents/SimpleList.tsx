import { Grid, Typography, Link } from "@mui/material";
import { ListItem } from "../types";
import ImageItemContent from "./ImageItemContent";
import DynamicIcon from "./DynamicIcon";
import { Link as RouterLink } from "react-router-dom";

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
                <ImageItemContent data={item.Image} sx={{ maxWidth: "50%" }} />
              </Grid>
            ) : null}
            {item.muiIcon ? (
              <Grid item xs={2} textAlign="center" p={1}>
                <DynamicIcon iconName={item.muiIcon} size="large" />
              </Grid>
            ) : null}
            <Grid
              item
              xs={item.Image || item.muiIcon ? 12 - imgCols : 12}
              mx="auto"
              p={1}
            >
              {item.linkUrl ? (
                <Link
                  component={RouterLink}
                  key={item?.linkUrl}
                  color="inherit"
                  to={item?.linkUrl || "#"}
                  variant="body2"
                  underline="none"
                  m={0}
                  lineHeight="0"
                >
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body1" mt={1}>
                    {item.text}
                  </Typography>
                </Link>
              ) : (
                <>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body1" mt={1}>
                    {item.text}
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
