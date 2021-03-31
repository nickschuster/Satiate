import { Typography, Link, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.text.main,
    },
  },
  container: {
    marginTop: 25,
    color: theme.palette.secondary.main,
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.container}>
        <Typography variant="caption" align="center" display="block">
          &copy; 2021 <Link className={classes.link}>Schuster Software</Link>
        </Typography>
        <Typography variant="caption" align="center" display="block">
          <Link className={classes.link}>Privacy policy</Link> &amp;{" "}
          <Link className={classes.link}>Terms and conditions</Link>
        </Typography>
      </footer>
    </>
  );
};
