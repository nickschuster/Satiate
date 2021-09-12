import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React from "react";

import Placeholder from "../../images/placeholder.png";

const useStyles = makeStyles((theme) => ({
  profilePicture: {
    display: "block",
    height: "100%",
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 100,
    border: "1px solid black",
  },
  settingParent: {
    height: "min(175px, 40vw)",
    width: "min(175px, 40vw)",
    margin: 20,
  },
  settings: {
    position: "relative",
    bottom: 30,
    right: "-50%",
    width: 48,
  },
  follow: {
    padding: 10,
  },
}));

export const ProfileDetails = ({ name, username, isYou }) => {
  const classes = useStyles();

  return (
    <Grid container align="center" justify="center" direction="column">
      <Grid item>
        <div className={classes.settingParent}>
          <img
            src={Placeholder}
            alt="Profile"
            className={classes.profilePicture}
          />
          {isYou ? (
            <div className={classes.settings}>
              <IconButton color="secondary">
                <Settings />
              </IconButton>
            </div>
          ) : (
            ""
          )}
        </div>
      </Grid>
      <Grid item>
        <Typography variant="h4" color="secondary">
          {name || "No Name Found."}
        </Typography>
        <Typography variant="body2" color="secondary">
          @{username || "nousernamefound"}
        </Typography>
      </Grid>
      {isYou ? (
        ""
      ) : (
        <Grid item className={classes.follow}>
          <Button variant="outlined" color="secondary">
            Follow/Unfollow
          </Button>
        </Grid>
      )}

      <Grid item></Grid>
    </Grid>
  );
};
