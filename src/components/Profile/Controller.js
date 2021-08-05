import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ProfileDetails } from "./ProfileDetails";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
  },
}));

export const ProfileController = ({ username, route, isYou }) => {
  const classes = useStyles();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      // Some api call that gets publicly viewable activity data.
    })();
  }, []);

  return (
    <>
      <Grid container className={classes.container}>
        <ProfileDetails
          name={userData.name}
          image={userData.image}
          username={userData.username}
        />
        <Grid container>{/* Activity */}</Grid>
      </Grid>
    </>
  );
};
