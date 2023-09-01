import { Box, Typography } from "@mui/material";
import {
  pageHeaderWrapper,
  homeHeader,
  headerVideo,
  headerOverlay,
  bgHeaderVideo,
  headerTitleWrapper,
} from "../styles/";

import { WebContentItem } from "../types";
import CtaButton from "./CtaButton";
import Wavy from "./Wavy";

type CompProps = {
  data: WebContentItem;
};

export default function HeaderSection({ data }: CompProps) {
  const style = data.Config.CustomStyle?.bgVideoUrl
    ? homeHeader
    : pageHeaderWrapper(data.Config.CustomStyle);
  return (
    <Box component="header" sx={style}>
      <Box sx={headerVideo}>
        {data.Config.CustomStyle?.bgVideoUrl ? (
          <Box
            component="video"
            sx={bgHeaderVideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={data.Config.CustomStyle?.bgVideoUrl} />
          </Box>
        ) : (
          <img src={data.Config.CustomStyle?.bgImgUrl} />
        )}
        <Box sx={headerOverlay}>
          <Box sx={headerTitleWrapper}>
            <Typography
              variant={data.Config.CustomStyle?.bgImgUrl ? "h2" : "h3"}
              mb={4}
            >
              {data.Header?.title}
            </Typography>
            <Typography variant="h4" mb={4}>
              {data.Header?.text}
            </Typography>
            <CtaButton data={data.Header?.Cta} />
          </Box>
          {data.Config.CustomStyle?.bgImgUrl ? (
            <Wavy waveColor={data.Config.CustomStyle?.waveColor} />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
