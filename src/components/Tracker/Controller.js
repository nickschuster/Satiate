import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
import { Meals } from "./Meals";
import { Totals } from "./Totals";

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
}));

export const TrackerController = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.mealsContainer}>
        <Meals />
        <Totals />
        <Footer />
      </Container>
    </>
  );
};
