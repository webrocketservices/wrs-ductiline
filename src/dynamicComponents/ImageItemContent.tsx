import { Box, Typography } from "@mui/material";
import { ImageItem } from "../types";

type CompProps = {
  data?: ImageItem;
  style?: any;
};
const defaultStyle = {
  width: "100%",
  margin: "auto",
  borderRadius: 5,
  // boxShadow: "2px -1px 15px -6px rgba(0,0,0,0.68)",
};
export default function ImageItemContent({ data, style }: CompProps) {
  return (
    <Box textAlign="center">
      <Box
        textAlign="center"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {data?.linkUrl ? (
          <a
            key={data?.linkUrl}
            color="inherit"
            {...(data.linkDownload
              ? { download: data.linkUrl, href: data.linkUrl }
              : { href: data.linkUrl })}
            style={{ color: "inherit" }}
          >
            <img src={data?.imgUrl} style={{ ...defaultStyle, ...style }} />
          </a>
        ) : (
          <img src={data?.imgUrl} style={{ ...defaultStyle, ...style }} />
        )}
      </Box>
      {data?.caption ? (
        <Typography variant="caption" display="block">
          {data.caption}
        </Typography>
      ) : null}
    </Box>
  );
}
