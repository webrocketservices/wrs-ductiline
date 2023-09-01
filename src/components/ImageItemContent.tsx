import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ImageItem } from "../types";

type CompProps = {
  data?: ImageItem;
  sx?: any;
};
const defaultStyle = {
  width: "100%",
  margin: "auto",
};
export default function ImageItemContent({ data, sx }: CompProps) {
  return (
    <Box textAlign="center">
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
    </Box>
  );
}
