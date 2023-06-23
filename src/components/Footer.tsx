import { Container, Typography, Link, Grid, Box, Icon } from "@mui/material";
import dummyData from "../DummyData.ts";

export default function Footer() {
  console.log(dummyData);

  return (
    <Box
      component="footer"
      p={4}
      bgcolor="brandPrimary.dark"
      color="brandPrimary.light"
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {dummyData.footer.columnsData.map((elem: any) => {
            return (
              <Grid
                item
                xs={12}
                md={3}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <Typography
                  variant="h6"
                  color="brandPrimary.contrastText"
                  fontWeight="bold"
                  gutterBottom={true}
                >
                  {elem.title}
                </Typography>

                {elem.list.map((subElem: any) => {
                  return subElem.icon === undefined ? (
                    <Typography variant="body2" gutterBottom={true}>
                      <Link
                        color="inherit"
                        href="#"
                        target="_blank"
                        underline="hover"
                      >
                        {subElem.text}
                      </Link>
                    </Typography>
                  ) : (
                    <Typography component="label" mr={2}>
                      <Icon component={subElem.icon} fontSize="large" />
                    </Typography>
                  );
                })}
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Typography variant="body2" align="center" gutterBottom={true}>
              {`Copyright © ${new Date().getFullYear()}`}
            </Typography>

            <Typography variant="body2" align="center">
              <Link
                color="inherit"
                href="https://webrocket.services/"
                target="_blank"
              >
                Powered by Web Rocket Services
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
