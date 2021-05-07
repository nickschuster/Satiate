import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";

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

const Leaderboards = () => {
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

  return (
    <>
      <div className={classes.container}>
        <Typography color="secondary" variant="h5" className={classes.text}>
          Hi{username ? ` ${username},` : ","} this page is under construction.
          Come back soon!
        </Typography>
      </div>
    </>
  );
};

export default Leaderboards;
