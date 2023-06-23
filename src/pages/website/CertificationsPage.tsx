import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

export default function CertificationsPage() {
  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_PROJECT_NAME} - Certificaciones</title>
      </Helmet>
      <Box component="main" mx={{ sm: 2, md: 4 }} my={8}>
        Certificaciones
      </Box>
    </>
  );
}
