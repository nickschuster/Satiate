import { Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
import { Meals } from "./Meals";
import { Totals } from "./Totals";
import { AddMeal } from "./AddMeal";
import { TrackerStates } from "./TrackerStates";

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
    transform: "translate(-50%,-50%)"
  }
}));

export const TrackerController = () => {
  const classes = useStyles();
  const [trackerState, setTrackerStateHook] = useState(undefined);

  const setTrackerState = (state) => {
    setTrackerStateHook(state);
  }

  const activeForm = () => {
    if(trackerState === TrackerStates.addMeal) {
      return <AddMeal />
    }
    return null;
  }

  return (
    <>
      <Header />
      <Container className={classes.mealsContainer}>
        <Meals setTrackerState={setTrackerState} meals={[]}/>
        <Totals />
        <Footer />
      </Container>
      <div className={classes.formContainer}>
        {activeForm()}
      </div>
    </>
  );
};
