import { Box, Typography } from "@mui/material";
import { GenericContent, CustomStyle } from "../types";
import parse from "html-react-parser";

type CompProps = {
  data: GenericContent;
  customStyle?: CustomStyle;
};

export default function ColumnTextContent({ data, customStyle }: CompProps) {
  return (
    // @ts-ignore
    <Box {...customStyle}>
      {data.title ? <Typography variant="h3">{data.title}</Typography> : null}
      {data.subTitle ? (
        <Typography variant="h4" mb={{ sm: 1, md: 2 }}>
          {data.subTitle}
        </Typography>
      ) : null}

      {/* @ts-ignore */}
      <Box fontSize="1.2em" textAlign={customStyle?.textAlign}>
        {parse(data.text || "")}
      </Box>
    </Box>
  );
}
