import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import { navigate } from "gatsby";
import { useNotification } from "../components/Notification";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    width: "100%",
    height: 100,
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
  },
  text: {
    padding: 20,
  },
});

const Profile = () => {
  const { addNotification } = useNotification;
  const classes = useStyles();

  const [username, setUsername] = useState();

  useEffect(() => {
    (async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUsername(user.attributes.name);
      } catch (e) {
        console.log(e);
      }
    })();
  });

  const signOut = async () => {
    try {
      await Auth.signOut();
      navigate("/");
    } catch (e) {
      addNotification("Could not sign out. " + e.message);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <Button onClick={signOut} color="secondary" variant="outlined">
          <Typography variant="h2">Sign out</Typography>
        </Button>
        <Typography color="secondary" variant="h5" className={classes.text}>
          Hi{username ? ` ${username},` : ","} this page is under construction.
          Come back soon!
        </Typography>
      </div>
    </>
  );
};

export default Profile;
