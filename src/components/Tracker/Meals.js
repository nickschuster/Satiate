import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
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
  headerContainer: {
    padding: 15,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  mealName: {
    color: theme.palette.text.main,
  },
  mealCalories: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  mealProtein: {
    color: theme.palette.protein.main,
  },
  mealFat: {
    color: theme.palette.fat.main,
  },
  mealCarbs: {
    color: theme.palette.carbs.main,
  },
}));

export const Meals = ({
  meals,
  setTrackerState,
  getMealTotal,
  saveEditMeal,
  deleteMeal,
}) => {
  const classes = useStyles();

  // Change the current tracker state to addMeal.
  const addMeal = () => {
    setTrackerState(TrackerStates.addMeal);
  };

  // Change tracker state and save the meal to be edited.
  const editMeal = (key) => {
    saveEditMeal(key);
    setTrackerState(TrackerStates.editMeal);
  };

  // Build the title using the meal info.
  const buildMealTitle = (meal) => {
    return (
      <div className={classes.headerContainer}>
        <Grid container>
          <Grid container justify="center">
            <Grid item>
              <Typography noWrap className={classes.mealName}>
                {meal.name || "Not provided."}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Typography className={classes.mealCalories}>
                {getMealTotal(meal, "calories")}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-evenly">
            <Grid item>
              <Typography className={classes.mealProtein}>
                {getMealTotal(meal, "protein")}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.mealFat}>
                {getMealTotal(meal, "fat")}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.mealCarbs}>
                {getMealTotal(meal, "carbs")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  // Build the ingredient details.
  const buildMealContent = (meal, key) => {
    if (Object.keys(meal).length === 0) {
      return (
        <Typography className={classes.mealName}>
          No ingredients provided.
        </Typography>
      );
    }
    return (
      <>
        {Object.entries(meal.ingredients).map(([key, value]) => {
          return (
            <div key={key} className={classes.headerContainer}>
              <Grid container justify="space-between">
                <Grid item xs={12} sm={"auto"}>
                  <Typography className={classes.mealName}>
                    {value.name || "Not provided."}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.mealCalories}>
                    {value.calories}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.mealProtein}>
                    {value.protein}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.mealFat}>
                    {value.fat}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.mealCarbs}>
                    {value.carbs}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          );
        })}

        <div className={classes.headerContainer}>
          <Grid container justify="space-evenly" spacing={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => deleteMeal(key)}
            >
              <Typography variant="h5">Delete</Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => editMeal(key)}
            >
              <Typography variant="h5">Edit</Typography>
            </Button>
          </Grid>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={classes.container}>
        {meals.map((meal) => {
          return (
            <LargeExpansionPanel
              key={meal.key}
              title={buildMealTitle(meal.content)}
              content={buildMealContent(meal.content, meal.key)}
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
