import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  btn: {
    color: "#f6f6f6",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.87), rgb(178 158 158 / 14%))",
    width: "130px",
    height: "55px",
  },
}));

const MyButton = ({ onButtonSubmit }) => {
  const classes = useStyles();

  return (
    <Button
      size="medium"
      className={classes.btn}
      type="button"
      onClick={onButtonSubmit}
    >
      Search
    </Button>
  );
};

export default MyButton;
