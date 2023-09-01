import { Box, Typography } from "@mui/material";
import {
  homeHeader,
  headerVideo,
  headerOverlay,
  bgHeaderVideo,
  headerTitleWrapper,
} from "../styles/";
// import HeaderVideoFile from "../../assets/video/header.mp4";

import { WebContentItem } from "../types";
import CtaButton from "./CtaButton";
import Wavy from "./Wavy";

type CompProps = {
  data: WebContentItem;
};

export default function HeaderVideoBg({ data }: CompProps) {
  return (
    <Box component="header" sx={homeHeader}>
      <Box sx={headerVideo}>
        <Box
          component="video"
          sx={bgHeaderVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={data.Config.CustomStyle?.bgImgUrl} />
        </Box>
        <Box sx={headerOverlay}>
          <Box sx={headerTitleWrapper}>
            <Typography variant="h3" mb={4}>
              {data.Header?.title}
            </Typography>
            <Typography variant="h4" mb={4}>
              {data.Header?.text}
            </Typography>
            <CtaButton data={data.Header?.Cta} />
          </Box>
        </Box>
      </Box>
      <Wavy waveColor="#465A64" />
    </Box>
  );
}
