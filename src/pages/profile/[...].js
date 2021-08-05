import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import { Footer } from "../../components/Footer";
import { ProfileController } from "../../components/Profile/Controller.js";
import { navigate } from "gatsby";

const Profile = ({ location }) => {
  const [route, setRoute] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [isYou, setIsYou] = useState(false);

  // Determine what the user is viewing and if they are signed in.
  useEffect(() => {
    (async () => {
      try {
        const route = location.pathname.split("/")[2];
        const username = (await Auth.currentAuthenticatedUser()).attributes
          .preferred_username;

        if (!route && !username) {
          navigate("/");
        }

        if (route === username || (username && !route)) {
          setIsYou(true);
        }

        setRoute(route);
        setUsername(username);
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <>
      <Container>
        <ProfileController username={username} route={route} isYou={isYou} />
        <Footer />
      </Container>
    </>
  );
};

export default Profile;
