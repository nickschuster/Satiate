import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Leaderboard } from "../components/Leaderboard/Leaderboard";
import { LeaderboardTitle } from "../components/Leaderboard/LeaderboadTitle";
import { Auth } from "aws-amplify";
import { Footer } from "../components/Footer";

const Leaderboards = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    (async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      if (currentUser) setUser(currentUser);
    })();
  }, []);

  return (
    <>
      <Container>
        <LeaderboardTitle />
        <Leaderboard />
        <Footer />
      </Container>
    </>
  );
};

export default Leaderboards;
