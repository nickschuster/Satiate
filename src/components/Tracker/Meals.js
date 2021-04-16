import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { LargeExpansionPanel } from "../LargeExpansionPanel";

// Image.
import Plus from "../../images/plus.png";
import { TrackerStates } from "./TrackerStates";

// Styling.
const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "50vh",
    overflowY: "auto",
  },
  addMealContainer: {
    marginBottom: 20,
  },
  addMeal: {
    height: 75,
  },
}));

export const Meals = ({ meals, setTrackerState, getMealTotal }) => {
  const classes = useStyles();

  // Change the current tracker state to addMeal.
  const addMeal = () => {
    setTrackerState(TrackerStates.addMeal);
  };

  // Build the title using the meal info.
  const buildMealTitle = (meal) => {
    console.log(meal);
    return (
      <>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item>
            <Typography variant="h6">
              {meal.name ? meal.name : "Not provided"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {getMealTotal(meal, "calories")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {getMealTotal(meal, "protein")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{getMealTotal(meal, "fat")}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{getMealTotal(meal, "carbs")}</Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  const buildMealContent = (meal) => {
    return <h1>test</h1>;
  };

  return (
    <>
      <div className={classes.container}>
        {meals.map((meal) => {
          return (
            <LargeExpansionPanel
              key={meal.key}
              title={buildMealTitle(meal.content)}
              content={buildMealContent(meal.content)}
            />
          );
        })}
        <div
          className={classes.addMealContainer}
          role="button"
          tabIndex="0"
          onClick={() => addMeal()}
          onKeyPress={() => addMeal()}
        >
          <img className={classes.addMeal} src={Plus} alt="+" />
        </div>
      </div>
    </>
  );
};
