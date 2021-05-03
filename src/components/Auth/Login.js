import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import { AuthStates } from "./AuthStates";
import React from "react";
import { useNotification } from "../Notification";

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
  forgotPassword: {
    paddingLeft: 14,
  },
  control: {
    marginBottom: 10,
    [theme.breakpoints.down(400)]: {
      justifyContent: "center",
    },
  },
}));

export const Login = ({ setAuthState }) => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10}>
            <TextField
              className={classes.input1}
              id="outlined"
              label="Email, username or phone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input2}
              id="outlined"
              label="Password"
              variant="outlined"
            />
            <Typography variant="body2" className={classes.forgotPassword}>
              <Link
                onClick={() => setAuthState(AuthStates.resetPassword)}
                underline="always"
              >
                Forgot password?
              </Link>
            </Typography>
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
                    onClick={() => setAuthState(AuthStates.register)}
                    underline="always"
                  >
                    Create account.
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setAuthState(AuthStates.loginSuccess)}
                >
                  <Typography variant="h5">Log in</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
