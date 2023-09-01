import { Box, Button } from "@mui/material";
import { Cta } from "../types";

type CompProps = {
  data?: Cta;
};

export default function CtaButton({ data }: CompProps) {
  return data ? (
    <Box textAlign="center" my={4}>
      <Button
        color="brandPrimary"
        variant="contained"
        sx={{
          padding: "10px 20px",
        }}
        href={data.linkUrl}
      >
        {data.text}
      </Button>
    </Box>
  ) : null;
}
