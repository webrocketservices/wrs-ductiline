import { Container, Typography, Link, Grid, Box } from "@mui/material";
import { useFetchWebContentDataQuery } from "../redux/firebaseSlice";
import { footerWrapper } from "../styles";
import { FooterColumn, ListItem } from "../types";
import { Link as RouterLink } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";

export default function Footer() {
  const { data } = useFetchWebContentDataQuery();

  return (
    <Box
      component="footer"
      p={4}
      bgcolor="brandPrimary.dark"
      color="brandPrimary.light"
      sx={footerWrapper}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {data?.WebConfig.WebFooter.map(
            (elem: FooterColumn, index: number) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ textAlign: { xs: "center", md: "left" } }}
                  key={index}
                >
                  <Typography
                    variant="h6"
                    color="brandPrimary.contrastText"
                    fontWeight="bold"
                    gutterBottom={true}
                  >
                    {elem.title}
                  </Typography>

                  {elem.TextList?.map((subElem: ListItem, index: number) => {
                    return subElem.muiIcon ? (
                      <Link
                        component={RouterLink}
                        key={index}
                        color="inherit"
                        to={subElem.linkUrl || "#"}
                        variant="body2"
                        underline="none"
                        m={1}
                        fontSize="2em"
                      >
                        <DynamicIcon iconName={subElem.muiIcon} size="large" />
                      </Link>
                    ) : (
                      <Typography
                        key={index}
                        variant="body2"
                        gutterBottom={true}
                      >
                        {subElem.linkUrl ? (
                          <Link
                            component={RouterLink}
                            key={subElem.text}
                            color="inherit"
                            to={subElem.linkUrl || "#"}
                            variant="body2"
                            underline="none"
                          >
                            {subElem.text}
                          </Link>
                        ) : (
                          subElem.text
                        )}
                      </Typography>
                    );
                  })}
                </Grid>
              );
            }
          )}

          <Grid item xs={12}>
            <Typography variant="body2" align="center" gutterBottom={true}>
              {`Derechos Reservados © ${new Date().getFullYear()}`}
            </Typography>

            <Typography variant="body2" align="center">
              <Link
                color="inherit"
                href="https://webrocket.services/"
                target="_blank"
              >
                Desarrollado Por Web Rocket Services
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
