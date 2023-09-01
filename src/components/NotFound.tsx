import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      minHeight="80vh"
      bgcolor="brandPrimary.dark"
      color="brandPrimary.contrastText"
      textAlign="center"
      py={10}
    >
      <Box
        border={2}
        m={10}
        p={10}
        borderRadius={5}
        display="inline-block"
        bgcolor="brandPrimary.contrastText"
        color="brandPrimary.dark"
        maxWidth="800px"
        boxShadow={4}
      >
        <img
          src="/img/404-error.png"
          style={{ margin: "40px", width: "250px" }}
        />
        <Typography variant="h4">
          ¡El contenido que estas tratando de encontrar no existe!
        </Typography>
      </Box>
    </Box>
  );
}
