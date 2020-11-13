import React from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  filled: {
    backgroundImage:
      "linear-gradient(rgba(142 139 139 / 87%), rgb(178 158 158 / 14%))",
  },
}));

const InputFilled = ({ onInputChange, input }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.filled}
        label="Search"
        onChange={onInputChange}
        value={input}
        variant="filled"
      />
    </form>
  );
};

export default InputFilled;
