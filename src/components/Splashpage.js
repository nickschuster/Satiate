import { Typography, Container } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";

import "../css/Splashpage.scss";

export const Splashpage = () => {
  return (
    <Container>
      <Typography
        className="splash-page-title"
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
        <Link to="/leaderboards" className="leaderboards-link">
          Leaderboards
        </Link>
      </Typography>
    </Container>
  );
};
