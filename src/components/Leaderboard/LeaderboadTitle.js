import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "10%",
  },
  link: {
    "&:hover": {
      color: theme.palette.text.main,
    },
  },
}));

export const LeaderboardTitle = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.title}
        variant="h1"
        color="secondary"
        align="center"
      >
        Satiate
      </Typography>
      <Typography variant="h4" color="secondary" align="center">
        Level up your fitness.
      </Typography>
      <Typography variant="h6" color="secondary" align="center">
        <Link to="/profile" className={classes.link} color="secondary">
          Profile
        </Link>
      </Typography>
      <Typography variant="h6" color="secondary" align="center">
        <Link to="/" className={classes.link} color="secondary">
          Tracker
        </Link>
      </Typography>
    </>
  );
};
