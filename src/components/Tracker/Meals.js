import { makeStyles } from "@material-ui/core";
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

export const Meals = ({meals, setTrackerState}) => {
  const classes = useStyles();

  const addMeal = () => {
    setTrackerState(TrackerStates.addMeal);
  };

  return (
    <>
      <div className={classes.container}>
        {meals.map((meal) => {
          return (
            <LargeExpansionPanel
              key={meal.key}
              title={<h1>test title</h1>}
              content={meal.content}
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
