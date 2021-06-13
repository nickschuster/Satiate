import { Typography } from "@material-ui/core";
import { Grid, makeStyles } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import React from "react";

const useStyles = makeStyles({
  container: {
    fontSize: 200,
    height: 300,
  },
  status: {
    fontSize: 20,
  },
});

export const FinishOnboarding = () => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.container}
        >
          <CheckCircleOutlineRoundedIcon fontSize="inherit" />
          <Typography variant="h2" className={classes.status}>
            Setting up your account ...
          </Typography>
        </Grid>
      </form>
    </>
  );
};
