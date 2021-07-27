import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Arrow from "../../images/arrow.png";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "50vh",
    width: "500px",
    height: "502px",
    borderRadius: 15,
    overflow: "hidden",
  },
  controlBG: {
    maxHeight: "50vh",
    width: 75,
    height: 500,
    float: "left",
    border: "2px solid",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  detailBG: {
    maxHeight: "50vh",
    height: 500,
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
    width: "calc(100% - 75px)",
    float: "right",
    backgroundColor: theme.palette.secondary.main,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  content: {
    maxHeight: "50vh",
    position: "absolute",
    width: "490px",
    height: "99%",
    textAlign: "center",
    overflowX: "auto",
    paddingTop: 20,
    borderRadius: 15,
  },
  control: {
    float: "left",
    width: 75,
  },
  detail: {
    float: "right",
    width: "calc(100% - 75px)",
  },
  arrow: {
    height: 50,
    padding: 5,
    rotate: "180deg",
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
              <div className={classes.control}>
                <img className={classes.arrow} src={Arrow} alt=">" />
              </div>
              <div className={classes.detail}>
                <h1>content</h1>
                <div></div>
              </div>
            </Grid>
          ))}
        </div>
      </div>
    </>
  );
};
