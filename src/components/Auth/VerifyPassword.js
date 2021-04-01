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
  form: {
    minWidth: 285,
    maxWidth: 450,
    flexGrow: 1,
  },
  input2: {
    width: "100%",
    marginTop: 20,
  },
  input1: {
    width: "100%",
    marginTop: 30,
  },
  resendCode: {
    paddingLeft: 14,
  },
  control: {
    marginBottom: 10,
    [theme.breakpoints.down(400)]: {
      justifyContent: "center",
    },
  },
}));

export const VerifyPassword = ({ setAuthState }) => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.form}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10}>
            <TextField
              className={classes.input1}
              id="outlined"
              label="Verification code"
              variant="outlined"
            />
            <Typography variant="body2" className={classes.resendCode}>
              <Link
                onClick={() => setAuthState(AuthStates.login)}
                underline="always"
              >
                Resend code?
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
                  onClick={() => setAuthState(AuthStates.newPassword)}
                >
                  <Typography variant="h5">Verify</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
