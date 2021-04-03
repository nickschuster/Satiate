import { Typography, Container, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import { AuthenticationFlow } from "./Auth/Controller";
import { Footer } from "./Footer";

// Style rules.
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "10%",
  },
  leaderboards: {
    marginTop: "5%",
    marginBottom: "8%",
  },
  leaderboardsLink: {
    "&:hover": {
      color: theme.palette.text.main,
    },
  },
}));

// Splashpage component.
export const Splashpage = ({ loginSuccess }) => {
  const classes = useStyles();

  return (
    <Container>
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
      <Typography
        className={classes.leaderboards}
        variant="h6"
        color="secondary"
        align="center"
      >
        <Link
          to="/leaderboards"
          color="white"
          className={classes.leaderboardsLink}
        >
          Leaderboards
        </Link>
      </Typography>
      <AuthenticationFlow
        className={classes.auth}
        loginSuccess={loginSuccess}
      />
      <Footer />
    </Container>
  );
};
