import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
import { Meals } from "./Meals";
import { Totals } from "./Totals";
import { AddMeal } from "./AddMeal";
import { TrackerStates } from "./TrackerStates";
import { Keygen } from "../../util/keygen";

const useStyles = makeStyles((theme) => ({
  mealsContainer: {
    position: "absolute",
    display: "block",
    top: 150,
    left: "50%",
    transform: "translate(-50%)",
    textAlign: "center",
    maxWidth: 500,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      top: 120,
    },
  },
  formContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

export const TrackerController = () => {
  const classes = useStyles();
  const [trackerState, setTrackerStateHook] = useState(undefined);
  const [meals, setMeals] = useState([]);

  // Calculate the total for a meal for a given type.
  const getMealTotal = (meal, type) => {
    let total = 0;
    for (const ing of Object.entries(meal.ingredients)) {
      total += parseInt(ing[1][type]);
    }
    return total;
  };

  // Calculate the total for all meals for a given type.
  const getTotals = (meals, type) => {
    let total = 0;
    for (const meal of meals) {
      total += getMealTotal(meal, type);
    }
    return total;
  };

  // Set the current tracker state.
  const setTrackerState = (state) => {
    setTrackerStateHook(state);
  };

  // Add a meal to the current day.
  const addMeal = (meal) => {
    console.log(meal);
    setMeals((prev) => {
      prev.push({
        key: Keygen.getKey(),
        content: meal,
      });
      return [...prev];
    });
  };

  const activeForm = () => {
    if (trackerState === TrackerStates.addMeal) {
      return <AddMeal setTrackerState={setTrackerState} addMeal={addMeal} />;
    }
    return null;
  };

  return (
    <>
      <Header />
      <Container className={classes.mealsContainer}>
        <Meals
          setTrackerState={setTrackerState}
          meals={meals}
          getMealTotal={getMealTotal}
        />
        <Totals />
        <Footer />
      </Container>
      <div className={classes.formContainer}>{activeForm()}</div>
    </>
  );
};
