import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import parse from "html-react-parser";
import { VideoListItem } from "../types";

type CompProps = {
  data: VideoListItem[];
};
export default function VideoList({ data }: CompProps) {
  return (
    <Box component="section" p={5}>
      {data.map((item: VideoListItem, index: number) => {
        return (
          <Grid container key={index} mb={4} maxWidth="1000px" mx="auto">
            <Grid item xs={4} textAlign="center">
              {item.Video.videoHtml ? (
                parse(item.Video.videoHtml)
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={item.Video.videoUrl}
                ></iframe>
              )}
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4" p={2}>
                {item.title}
              </Typography>
              <Typography variant="body1" px={2}>
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
