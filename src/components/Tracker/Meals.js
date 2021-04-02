import { makeStyles } from "@material-ui/core";
import React from "react";
import { LargeExpansionPanel } from "../LargeExpansionPanel";

// Styling.
const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "50vh",
    overflowY: "auto",
  },
}));

export const Meals = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <LargeExpansionPanel
          title={<h1>Test</h1>}
          content={
            <>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>Test
            </>
          }
        />
        <LargeExpansionPanel
          title={<h1>Test</h1>}
          content={
            <>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>
              <h1>Test</h1>Test
            </>
          }
        />
      </div>
    </>
  );
};
