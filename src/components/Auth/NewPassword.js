import React from "react";
import {
  Grid,
  TextField,
  makeStyles,
  Link,
  Typography,
  Button,
} from "@material-ui/core";
import { AuthStates } from "./AuthStates";

// Styling.
const useStyles = makeStyles((theme) => ({
  input2: {
    width: "100%",
    marginTop: 20,
  },
  input1: {
    width: "100%",
    marginTop: 30,
  },
  passwordRules: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: "grey",
  },
  control: {
    marginBottom: 10,
    [theme.breakpoints.down(400)]: {
      justifyContent: "center",
    },
  },
}));

export const NewPassword = ({ setAuthState }) => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10}>
            <TextField
              className={classes.input1}
              id="outlined"
              label="New password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input2}
              id="outlined"
              label="Confirm new password"
              variant="outlined"
            />
            <div className={classes.passwordRules}>placeholder</div>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              spacing={3}
              justify="space-between"
              direction="row"
              alignItems="center"
              className={classes.control}
            >
              <Grid item>
                <Typography variant="h5">
                  <Link
                    onClick={() => setAuthState(AuthStates.login)}
                    underline="always"
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setAuthState(AuthStates.login)}
                >
                  <Typography variant="h5">Reset password</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
