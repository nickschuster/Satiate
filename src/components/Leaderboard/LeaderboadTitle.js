import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "10%",
  },
  links: {
    margin: "5%",
    [theme.breakpoints.down("xs")]: {
      margin: 5,
      height: 30,
    },
  },
  profileLink: {
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      float: "left",
      textAlign: "right",
      paddingRight: 5,
    },
  },
  trackerLink: {
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      float: "left",
      textAlign: "left",
      paddingLeft: 5,
    },
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
      <div className={classes.links}>
        <Typography
          variant="h6"
          color="secondary"
          align="center"
          className={classes.profileLink}
        >
          <Link to="/profile" className={classes.link}>
            Profile
          </Link>
        </Typography>
        <Typography
          variant="h6"
          color="secondary"
          align="center"
          className={classes.trackerLink}
        >
          <Link to="/" className={classes.link}>
            Tracker
          </Link>
        </Typography>
      </div>
    </>
  );
};
