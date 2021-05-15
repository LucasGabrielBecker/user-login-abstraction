import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Logged() {
  const classes = useStyles();
  const location = useLocation();
  const { loginResult } = location;

  return (
    <div className={classes.wrapper}>
      <h3>{loginResult.msg}</h3>
    </div>
  );
}
