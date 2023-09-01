import { Box, Grid, Skeleton, Typography } from "@mui/material";

export default function Loader() {
  return (
    <Box
      minHeight="80vh"
      bgcolor="brandPrimary.contrastText"
      color="brandPrimary.main"
      py={8}
      px={{ xs: 4, md: 8 }}
    >
      <Box component="section" mt={6}>
        <Grid container spacing={5}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h3">
              {import.meta.env.VITE_PROJECT_NAME}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Skeleton variant="rectangular" height={20} />
          </Grid>
          <Grid item xs={2}>
            <Skeleton variant="circular" width={150} height={150} />
          </Grid>
          <Grid item xs={10}>
            <Skeleton variant="rectangular" height={20} />
            <br />
            <Skeleton variant="rectangular" height={20} />
            <br />
            <Skeleton variant="rectangular" height={20} />
            <br />
            <Skeleton variant="rectangular" height={20} />
            <br />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={20} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" height={20} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
