import { Helmet } from "react-helmet";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_PROJECT_NAME} - Inicio</title>
      </Helmet>
      <Box component="main" mx={{ sm: 2, md: 4 }} my={8}>
        Welcome to {import.meta.env.VITE_PROJECT_NAME}!
      </Box>
    </>
  );
}
