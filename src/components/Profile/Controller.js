import { Grid } from "@material-ui/core";
import React from "react";

export const ProfileController = ({ username, route, isYou }) => {
  return (
    <>
      <Grid container>
        <h1>{username}</h1>
      </Grid>
    </>
  );
};
