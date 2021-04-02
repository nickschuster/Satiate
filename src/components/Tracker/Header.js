import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";

// Image.
import Arrow from "../../images/arrow.png";

const useStyles = makeStyles((theme) => ({
  prev: {
    height: 75,
    marginTop: "40vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  link: {
    "&:hover": {
      color: theme.palette.text.main,
    },
  },
  next: {
    transform: "rotate(180deg)",
    height: 75,
    marginTop: "40vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  container: {
    marginTop: 20,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="space-evenly" className={classes.container}>
        <Grid item>
          <img src={Arrow} className={classes.prev} alt="<" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3" color="secondary">
            Feb, 2nd 2021
          </Typography>
          <Typography variant="h5" color="secondary">
            <Link to="/profile" className={classes.link}>
              Profile
            </Link>
          </Typography>
          <Typography variant="h5" color="secondary">
            <Link to="/leaderboards" className={classes.link}>
              Leaderboards
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <img src={Arrow} className={classes.next} alt=">" />
        </Grid>
      </Grid>
    </>
  );
};
