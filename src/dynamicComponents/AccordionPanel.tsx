import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import SimpleList from "./SimpleList";
import { SyntheticEvent, useState } from "react";
import { AccordionItem } from "../types";
import ColumnTextContent from "./ColumnTextContent";
import ImageItemContent from "./ImageItemContent";

type CompProps = {
  data: AccordionItem[];
};

export default function AccordionList({ data }: CompProps) {
  console.log(data);

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box bgcolor="transparent" p={5}>
      {data.map((item: AccordionItem, index: number) => {
        return (
          <Accordion
            sx={{ mb: 2, color: "brandGray.dark" }}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel-${index}-header`}
            >
              <Typography sx={{ mr: 2, flexShrink: 0 }}>
                {item.Summary.title}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {item.Summary.subTitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.Content.TextList ? (
                <SimpleList data={item.Content.TextList} />
              ) : null}

              {item.Content.Content ? (
                <ColumnTextContent data={item.Content.Content} />
              ) : null}

              {item.Content.Image ? (
                <ImageItemContent
                  data={item.Content.Image}
                  sx={{ maxWidth: "800px" }}
                />
              ) : null}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
