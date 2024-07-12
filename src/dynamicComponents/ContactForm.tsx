// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Box, TextField, Button, Alert } from "@mui/material";
import { ContactForm as ContactFormType } from "../types";
import useContactForm from "../hooks/useContactForm";
import CheckIcon from "@mui/icons-material/Check";

type CompProps = {
  data?: ContactFormType;
};

export default function ContactForm({ data }: CompProps) {
  const {
    handleSubmit,
    name,
    setName,
    phone,
    setPhone,
    company,
    setCompany,
    comments,
    setComments,
    apiResponse,
    buttonDisabled,
    apiLoading,
  } = useContactForm();

  return (
    <Box
      component="form"
      bgcolor="rgba(229, 241, 249, 0.8)"
      borderRadius={1}
      p={4}
      boxShadow={3}
    >
      <TextField
        fullWidth
        id="name"
        label={`*${data?.name}`}
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <TextField
        fullWidth
        id="phone"
        label={`*${data?.phone}`}
        variant="standard"
        inputProps={{ style: { color: "red" } }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />{" "}
      <br />
      <br />
      <TextField
        fullWidth
        id="company"
        label={`*${data?.company}`}
        variant="standard"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />{" "}
      <br />
      <br />
      <TextField
        multiline
        id="comments"
        label={`*${data?.comments}`}
        variant="standard"
        fullWidth
        rows={5}
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <Box mt={2} color="#012e6c">
        * Todos los campos son obligatorios.
      </Box>
      <Box mx="auto" mt={2}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          disabled={buttonDisabled || apiLoading}
        >
          {apiLoading ? "Enviando..." : data?.buttonText}
        </Button>
      </Box>
      {apiResponse != null && (
        <Box mt={2}>
          <Alert severity={apiResponse.type}>{apiResponse.message}</Alert>
        </Box>
      )}
    </Box>
  );
}
