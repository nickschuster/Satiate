import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "50vh",
    width: "500px",
    height: "500px",
    border: "1px solid black",
  },
  controlls: {
    width: 75,
    heigth: "100%",
    float: "left",
    border: "1px solid",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  details: {
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    width: "calc(100% - 75px)",
    float: "right",
    backgroundColor: theme.palette.secondary.main,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
}));

export const CommonlyUsed = () => {
  const classes = useStyles();

  const meals = ["test", "test", "test"];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.controlls}>
          {meals.map(() => (
            <h1>&gt;</h1>
          ))}
        </div>
        <div className={classes.details}>
          {meals.map(() => (
            <Grid container>
              <h1>Content</h1>
            </Grid>
          ))}
        </div>
      </div>
    </>
  );
};
