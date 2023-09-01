import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ImageItem } from "../types";

type CompProps = {
  data?: ImageItem;
  sx?: any;
};
const defaultStyle = {
  width: "100%",
  margin: "auto",
  borderRadius: 5,
  // boxShadow: "2px -1px 15px -6px rgba(0,0,0,0.68)",
};
export default function ImageItemContent({ data, sx }: CompProps) {
  return (
    <Box
      textAlign="center"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {data?.linkUrl ? (
        <Link
          component={RouterLink}
          key={data?.linkUrl}
          color="inherit"
          to={data?.linkUrl || "#"}
          variant="body2"
          underline="none"
          m={0}
          lineHeight="0"
        >
          <img src={data?.imgUrl} style={{ ...defaultStyle, ...sx }} />
        </Link>
      ) : (
        <img src={data?.imgUrl} style={{ ...defaultStyle, ...sx }} />
      )}
      {data?.caption ? (
        <Typography variant="caption" display="block">
          {data.caption}
        </Typography>
      ) : null}
    </Box>
  );
}
