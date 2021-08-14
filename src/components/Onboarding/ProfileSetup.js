import React from "react";
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    backgroundColor: "grey",
    height: 175,
    width: 175,
    borderRadius: 100,
    marginTop: 40,
    marginBottom: 10,
  },
  input: {
    width: "100%",
  },
  control: {
    marginBottom: 20,
  },
}));

export const ProfileSetup = () => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid>
            <div className={classes.profileImage}></div>
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input}
              id="outlined"
              label="Name"
              variant="outlined"
              // value={user.email}
              // onChange={(event) => handleChange("email", event)}
              // error={!!formErrors.email}
              // helperText={formErrors.email}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input}
              id="outlined"
              label="Username"
              variant="outlined"
              // value={user.email}
              // onChange={(event) => handleChange("email", event)}
              // error={!!formErrors.email}
              // helperText={formErrors.email}
            />
          </Grid>
          <Grid item sx={10}>
            <Grid
              container
              spacing={3}
              justify="space-between"
              direction="row"
              alignItems="center"
              className={classes.control}
            >
              <Grid item>
                <Button variant="contained" color="primary">
                  <Typography variant="h5">Next</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
