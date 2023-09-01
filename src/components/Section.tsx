import { Button, Box, Icon, Grid, Typography } from "@mui/material";
import { sectionComponent } from "../styles";

export default function Section({
  imgSide,
  data,
  customStyle,
  fullWidthImage,
}: any) {
  return (
    <Box
      component="section"
      sx={sectionComponent({
        bgImg: customStyle.bgImg,
        bgColor: customStyle.bgColor,
      })}
    >
      {data.highlight !== undefined ? (
        <Grid container spacing={5} maxWidth="1200px" mx="auto">
          <Grid item xs={12}>
            <Typography variant="h3" textAlign="center" m={4}>
              {data.title}
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h4" mt={0}>
              {data.highlight}
            </Typography>
            <Button
              color="brandPrimary"
              variant="contained"
              sx={{ padding: "10px", marginTop: "40px" }}
            >
              Lorem Ipsum
            </Button>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container spacing={5} maxWidth="1200px" mx="auto">
            <Grid item xs={12}>
              <Typography variant="h3" textAlign="center" m={4}>
                {data.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={5}
            maxWidth="1200px"
            mx="auto"
            direction={imgSide === "left" ? "row-reverse" : "row"}
          >
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={data.imgUrl}
                style={{
                  maxWidth: fullWidthImage ? "100%" : "400px",
                  margin: "auto",
                  opacity: "0.9",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <div>
                {data.list ? (
                  <>
                    {data.list.map((e: any, i: number) => {
                      return (
                        <Typography key={i} variant="h5" my={2}>
                          <Icon component={e.icon} />
                          {e.text}
                        </Typography>
                      );
                    })}
                    <Box textAlign="center">
                      <Button
                        color="brandPrimary"
                        variant="contained"
                        sx={{ padding: "10px", marginTop: "40px" }}
                      >
                        Lorem Ipsum
                      </Button>
                    </Box>
                  </>
                ) : (
                  <>
                    <Typography fontSize="large" mb={5}>
                      {data.p1}
                    </Typography>
                    <Typography fontSize="large">{data.p2}</Typography>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}
