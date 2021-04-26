import { makeStyles, Typography, Grid } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 15,
    padding: 10,
  },
  calorieGoal: {
    fontWeight: "bold",
  },
  proteinGoal: {
    color: theme.palette.protein.main,
  },
  fatGoal: {
    color: theme.palette.fat.main,
  },
  carbsGoal: {
    color: theme.palette.carbs.main,
  },
  score: {
    color: theme.palette.text.main,
    fontWeight: "bold",
  },
}));

export const Totals = ({ getTotals, goals, getPoints }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Typography
          variant="h5"
          className={classes.calorieGoal}
          color="primary"
        >
          {getTotals("calories")}/{goals.calories || "----"}
        </Typography>
        <Grid container justify="space-evenly">
          <Grid item>
            <Typography variant="h5" className={classes.proteinGoal}>
              {getTotals("protein")}/{goals.protein || "----"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.fatGoal}>
              {getTotals("fat")}/{goals.fat || "----"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.carbsGoal}>
              {getTotals("carbs")}/{goals.carbs || "----"}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h5" className={classes.score}>
          {getPoints()}
        </Typography>
      </div>
    </>
  );
};
