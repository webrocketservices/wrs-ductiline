import { Box, Grid, Typography } from "@mui/material";
import { sectionComponent } from "../styles";
import { ColumnContent, WebContentItem } from "../types";
import SimpleList from "./SimpleList";
import ColumnTextContent from "./ColumnTextContent";
import ImageItemContent from "./ImageItemContent";
import CtaButton from "./CtaButton";
import VideoList from "./VideoList";
import HtmlSnippet from "./HtmlSnippet";
import ContactForm from "./ContactForm";
// import AccordionList from "./AccordionList";
type CompProps = {
  data: WebContentItem;
};
export default function NewSection({ data }: CompProps) {
  return (
    <Box
      component="section"
      sx={sectionComponent({
        bgImg: data.Config.CustomStyle?.bgImgUrl,
        bgColor: data.Config.CustomStyle?.bgColor,
      })}
    >
      <Grid container rowSpacing={5} maxWidth="1300px" mx="auto">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" m={{ sm: 1, md: 4 }}>
            {data.Content?.title}
          </Typography>
          <Typography variant="h4" m={2}>
            {data.Content?.subTitle}
          </Typography>
          <Typography m={2}>{data.Content?.text}</Typography>
        </Grid>
        {data.Content?.Columns.map((column: ColumnContent, index: number) => {
          return (
            <Grid
              item
              xs={12}
              md={
                data.Content?.Columns.length
                  ? 12 / data.Content?.Columns.length
                  : 12
              }
              key={index}
              p={{ sm: 0, md: 2 }}
            >
              {column.Content ? (
                <ColumnTextContent
                  data={column.Content}
                  customStyle={column.CustomStyle}
                />
              ) : null}
              {column.ContactForm ? (
                <ContactForm data={column.ContactForm} />
              ) : null}
              {column.HtmlSnippet ? (
                <HtmlSnippet data={column.HtmlSnippet} />
              ) : null}
              {column.TextList ? <SimpleList data={column.TextList} /> : null}
              {/* {column.Accordion ? (
                <AccordionList data={column.Accordion} />
              ) : null} */}
              {column.VideoList ? <VideoList data={column.VideoList} /> : null}
              {column.Image ? (
                <ImageItemContent
                  data={column.Image}
                  sx={{ maxWidth: "80%" }}
                />
              ) : null}
              <CtaButton data={column.Cta} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
