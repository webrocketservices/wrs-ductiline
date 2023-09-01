import { Box, TextField, Button } from "@mui/material";
import { ContactForm as ContactFormType } from "../types";

type CompProps = {
  data?: ContactFormType;
};

export default function ContactForm({ data }: CompProps) {
  return (
    <Box
      component="form"
      bgcolor="rgba(229, 241, 249, 0.8)"
      borderRadius={1}
      p={4}
      boxShadow={3}
    >
      <TextField fullWidth id="name" label={data?.name} variant="standard" />
      <br />
      <br />
      <TextField
        fullWidth
        id="phone"
        label={data?.phone}
        variant="standard"
      />{" "}
      <br />
      <br />
      <TextField
        fullWidth
        id="company"
        label={data?.company}
        variant="standard"
      />{" "}
      <br />
      <br />
      <TextField
        multiline
        id="comments"
        label={data?.comments}
        variant="standard"
        fullWidth
        rows={5}
      />
      <br />
      <br />
      <Box mx="auto">
        <Button variant="contained" color="primary" size="large">
          {data?.buttonText}
        </Button>
      </Box>
    </Box>
  );
}
