import { Helmet } from "react-helmet";
import Section from "../../components/Section";
import DummyData from "../../DummyData";
import { Box, Grid, TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";
import headerBgImg from "../../assets/img/contact-bg.jpg";
import Map2Img from "../../assets/img/map2.png";

import {
  pageHeaderWrapper,
  pageHeaderOverlay,
  sectionComponent,
} from "../../styles";
import Wavy from "../../components/Wavy";

const colors = {
  header: { textColor: "brandGray.dark" },
  section: { bgColor: "brandGray.dark" },
};

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_PROJECT_NAME} - Contacto</title>
      </Helmet>
      <Grid container>
        <Grid item xs={12} sx={pageHeaderWrapper(colors.header)}>
          <img src={headerBgImg} />
          <Box sx={pageHeaderOverlay}>
            <Box>
              <Typography variant="h2">Contacto</Typography>
            </Box>
          </Box>
          <Wavy waveColor="#465A64" />
        </Grid>
        <Grid item xs={12}>
          <Section
            imgSide="left"
            highlight
            data={DummyData.home3}
            customStyle={{ bgColor: colors.section.bgColor, bgImg: Map2Img }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box
            component="section"
            sx={sectionComponent({
              bgImg: null,
              bgColor: "#465A64",
            })}
          >
            <Grid container spacing={5}>
              <Grid item xs={6} p={2}>
                <Box boxShadow={3}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10638.459987342245!2d-103.32360676235986!3d20.608805277234445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb52fd39b%3A0xd63d9302bf865750!2sGuadalajara%2C%20Jalisco!5e0!3m2!1sen!2smx!4v1688142918981!5m2!1sen!2smx"
                    style={{
                      border: 0,
                      width: "100%",
                      height: "500px",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box mb={4}>
                  <Typography variant="h4" py={2}>
                    Dirección
                  </Typography>
                  <Typography variant="body1">
                    Ipsum eiusmod ullamco deserunt eu nostrud cillum.
                    Guadalajra, Jalisco, México.
                  </Typography>
                </Box>
                <Box mb={4}>
                  <Typography variant="h4" py={2}>
                    Teléfonos
                  </Typography>
                  <Typography variant="body1">
                    Ullamco deserunt eu nostrud cillum. 6am - 8pm.
                  </Typography>
                  <Typography component="div">
                    <ul>
                      <li>333 164 5645</li>
                      <li>333 164 5645</li>
                      <li>333 164 5645</li>
                    </ul>
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={5} mt={6}>
              <Grid item xs={6}>
                <Box mb={4}>
                  <Typography variant="h4" py={2}>
                    Envianos un comentario
                  </Typography>
                  <Typography variant="body1">
                    Ipsum eiusmod ullamco deserunt eu nostrud cillum. Ipsum
                    eiusmod ullamco deserunt eu nostrud cillum, cualquier duda.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  component="form"
                  bgcolor="rgba(229, 241, 249, 0.8)"
                  borderRadius={1}
                  p={4}
                  boxShadow={3}
                >
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Nombre"
                    variant="standard"
                  />
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Teléfono"
                    variant="standard"
                  />{" "}
                  <br />
                  <br />
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Compañía"
                    variant="standard"
                  />{" "}
                  <br />
                  <br />
                  <TextField
                    multiline
                    id="standard-basic"
                    label="Comentarios"
                    variant="standard"
                    fullWidth
                    rows={5}
                  />
                  <br />
                  <br />
                  <Box mx="auto">
                    <Button
                      variant="contained"
                      color="brandPrimary"
                      size="large"
                    >
                      Enviar comentarios
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
