import React from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const useStyles = makeStyles(() => ({
  box: {
    color: "#f6f6f6",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.87), rgb(178 158 158 / 14%))",
    borderRadius: "10px",
    width: "550px",
    height: "500px",
  },
  avatar: {
    height: "150px",
    width: "150px",
    borderRadius: "75px",
    backgroundColor: "white",
  },
}));

const WeatherCard = ({ weather, error }) => {
  const classes = useStyles();
  if (error) {
    return (
      <Grid container justify="center" align="center">
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>The city doesn't exist! Try again.</strong>
        </Alert>
      </Grid>
    );
  }
  if (weather === null) {
    return null;
  }
  return (
    <Container maxWidth="sm">
      <Grid container justify="center" align="center">
        <Box p={5} mb={10} className={classes.box}>
          <Avatar
            alt="Remy Sharp"
            src={`/icons/${weather.icon || "1"}.svg`}
            className={classes.avatar}
          />
          <Box mt={5}>
            <Typography variant="h3">{weather.cityName}</Typography>
            <Typography variant="h4">
              .......................................
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="h4">{weather.text}</Typography>
          </Box>
          <Box my={4}>
            <Typography variant="h3">{weather.temperature}<span>&deg;C</span></Typography>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default WeatherCard;
