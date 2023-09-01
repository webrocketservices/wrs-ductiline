import { Box, Typography } from "@mui/material";
import { GenericContent, CustomStyle } from "../types";
import parse from "html-react-parser";

type CompProps = {
  data: GenericContent;
  customStyle?: CustomStyle;
};

export default function ColumnTextContent({ data, customStyle }: CompProps) {
  return (
    <Box {...customStyle}>
      {data.title ? <Typography variant="h3">{data.title}</Typography> : null}
      {data.subTitle ? (
        <Typography variant="h4" mb={{ sm: 1, md: 2 }}>
          {data.subTitle}
        </Typography>
      ) : null}
      <Box fontSize="1.2em">{parse(data.text || "")}</Box>
    </Box>
  );
}
