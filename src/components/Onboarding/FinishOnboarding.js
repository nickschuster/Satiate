import { Typography } from "@material-ui/core";
import { Grid, makeStyles } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    fontSize: 200,
    height: 300,
  },
  status: {
    fontSize: 20,
    color: theme.palette.text.main,
  },
  finishedIcon: {
    color: theme.palette.text.main,
  },
  loadingStatus: {
    marginTop: 20,
  },
  loading: {
    borderColor: theme.palette.text.main,
    border: "18px solid black",
    borderRadius: "50%",
    borderTop: "18px solid rgba(0,0,0,0.0) !important",
    width: 160,
    height: 160,
    animation: "$spin 2s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg);" },
    "100%": { transform: "rotate(360deg);" },
  },
  displayTransition: {
    transition: "opacity 1s ease-in",
  },
}));

export const FinishOnboarding = (props) => {
  let loading = props.isLoading;
  if (loading === undefined) loading = true; // default to show loading icon.

  const classes = useStyles();

  return (
    <>
      <form
        className={classes.displayTransition}
        style={{ opacity: loading ? "1.0" : "0.0" }}
      >
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.container}
        >
          {loading ? (
            <>
              <div className={classes.loading}></div>
              <Typography
                className={`${classes.status} ${classes.loadingStatus}`}
              >
                Setting up your account ...
              </Typography>
            </>
          ) : (
            <>
              <CheckCircleOutlineRoundedIcon
                fontSize="inherit"
                className={classes.finishedIcon}
              />
              <Typography className={classes.status}>Done!</Typography>
            </>
          )}
        </Grid>
      </form>
    </>
  );
};
