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
  container: {
    marginTop: 50,
  },
  profilePicture: {
    margin: 20,
    display: "block",
    height: "175px",
    width: "175px",
    backgroundColor: "grey",
    borderRadius: 100,
    border: "1px solid black",
  },
  settings: {
    position: "absolute",
    top: 210,
    left: "calc(50% + 60px)",
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
    </Grid>
  );
};
