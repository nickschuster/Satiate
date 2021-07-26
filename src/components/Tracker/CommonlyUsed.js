import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "50vh",
    width: "500px",
    height: "502px",
    border: "1px solid black",
    borderRadius: 15,
  },
  controlBG: {
    maxHeight: "50vh",
    width: 75,
    height: 500,
    float: "left",
    border: "1px solid",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  detailBG: {
    maxHeight: "50vh",
    height: 500,
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    width: "calc(100% - 75px)",
    float: "right",
    backgroundColor: theme.palette.secondary.main,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.2)",
    textAlign: "center",
    overflowX: "auto",
  },
  controll: {
    float: "left",
    width: 75,
  },
  detail: {
    float: "right",
    width: "calc(100% - 75px)",
  },
}));

export const CommonlyUsed = () => {
  const classes = useStyles();

  const meals = [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
  ];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.controlBG}></div>
        <div className={classes.detailBG}></div>
        <div className={classes.content}>
          {meals.map(() => (
            <Grid container>
              <div className={classes.controll}>&gt;</div>
              <div className={classes.detail}>CONTENT</div>
            </Grid>
          ))}
        </div>
      </div>
    </>
  );
};
