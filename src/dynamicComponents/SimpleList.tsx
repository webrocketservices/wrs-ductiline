import { Grid, Typography } from "@mui/material";
import { ListItem } from "../types";
import ImageItemContent from "./ImageItemContent";
import DynamicIcon from "./DynamicIcon";
import { useEffect, useRef } from "react";

type CompProps = {
  data: ListItem[];
};

export default function SimpleList({ data }: CompProps) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const childNodesText =
              entry.target.querySelectorAll(".animate-text");
            const childNodesImg = entry.target.querySelectorAll(".animate-img");
            childNodesText.forEach((node) => {
              node.classList.add(
                "animate__animated",
                "animate__pulse",
                "animate__delay-0.5s"
              );
            });
            childNodesImg.forEach((node) => {
              node.classList.add(
                "animate__animated",
                "animate__backInLeft",
                "animate__delay-1s"
              );
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect(); // Clean up the observer
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {data.map((item: ListItem, index: number) => {
        let imgCols = 2;
        if (item.Image && item.Image.cols) {
          imgCols = item.Image.cols;
        }
        return (
          <Grid container key={index} mx="auto">
            {item.Image ? (
              <Grid
                item
                xs={imgCols}
                textAlign="center"
                p={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="animate-img"
              >
                <ImageItemContent data={item.Image} style={item.Image.Style} />
              </Grid>
            ) : null}
            {item.muiIcon ? (
              <Grid
                item
                xs={2}
                textAlign="center"
                p={1}
                className="animate-img"
              >
                <DynamicIcon iconName={item.muiIcon} size="large" />
              </Grid>
            ) : null}
            <Grid
              item
              xs={item.Image || item.muiIcon ? 12 - imgCols : 12}
              mx="auto"
              p={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="animate-text"
            >
              {item.linkUrl ? (
                <a
                  key={item?.linkUrl}
                  color="inherit"
                  {...(item.linkDownload
                    ? { download: item.linkUrl, href: "#" }
                    : { href: item.linkUrl })}
                  style={{ color: "inherit" }}
                >
                  <Typography variant="h5" sx={{ width: "100%" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" mt={1} sx={{ width: "100%" }}>
                    {item.text}
                  </Typography>
                </a>
              ) : (
                <>
                  <Typography variant="h5" sx={{ width: "100%" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" mt={1} sx={{ width: "100%" }}>
                    {item.text}
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
