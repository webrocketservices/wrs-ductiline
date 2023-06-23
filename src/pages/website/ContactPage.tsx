import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_PROJECT_NAME} - Contacto</title>
      </Helmet>
      <Box component="main" mx={{ sm: 2, md: 4 }} my={8}>
        Contacto
      </Box>
    </>
  );
}
