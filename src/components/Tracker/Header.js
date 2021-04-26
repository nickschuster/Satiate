import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";
import moment from "moment";
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
  imgButton: {
    cursor: "pointer",
  },
  container: {
    marginTop: 20,
  },
}));

export const Header = ({ currentDay, nextDay, prevDay }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="space-evenly" className={classes.container}>
        <Grid item>
          <div
            className={classes.imgButton}
            onClick={() => prevDay()}
            onKeyDown={() => prevDay()}
            role="button"
            tabIndex="-2"
          >
            <img src={Arrow} className={classes.prev} alt="<" />
          </div>
        </Grid>
        <Grid item align="center">
          <Typography variant="h3" color="secondary">
            {moment.unix(currentDay * 86400).format("LL")}
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
          <div
            className={classes.imgButton}
            onClick={() => nextDay()}
            onKeyDown={() => nextDay()}
            role="button"
            tabIndex="-1"
          >
            <img src={Arrow} className={classes.next} alt=">" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
