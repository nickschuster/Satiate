import { Typography, Container, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import { AuthenticationFlow } from "./Auth/Controller";

// Style rules.
const useStyles = makeStyles({
  title: {
    marginTop: "10%",
  },
  leaderboardsLink: {
    marginTop: "5%",
    marginBottom: "10%",
  },
});

// Splashpage component.
export const Splashpage = () => {
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
        className={classes.leaderboardsLink}
        variant="h6"
        color="secondary"
        align="center"
      >
        <Link to="/leaderboards" color="white">
          Leaderboards
        </Link>
      </Typography>
      <AuthenticationFlow className={classes.auth} />
    </Container>
  );
};
