import React from "react";
import InputFilled from "./InputFilled.component";
import MyButton from "./MyButton.component";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const WeatherForm = ({ onInputChange, input, onButtonSubmit }) => {
  return (
    <>
      <Box mt={10} mb={4}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <InputFilled onInputChange={onInputChange} input={input} />
          </Grid>
          <Grid item>
            <MyButton onButtonSubmit={onButtonSubmit} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WeatherForm;
