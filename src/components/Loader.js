import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  loader: {
    position: "sticky",
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100px",
    height: "100px",
    zIndex: 10,
  },
});

export const Loader = ({ show, style }) => {
  const classes = useStyles();

  if (show) {
    return (
      <>
        <div className={`${classes.loader} + ${style}`}></div>
      </>
    );
  } else {
    return null;
  }
};
