import React, { useState } from "react";
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

export const VerifyAccount = ({ setAuthState, resendCode, verifyEmail }) => {
  const classes = useStyles();

  const [code, setCode] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setCode(value);
  };

  return (
    <>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10}>
            <TextField
              className={classes.input1}
              id="outlined"
              label="Verification code"
              variant="outlined"
              onChange={(evt) => handleChange(evt)}
            />
            <Typography variant="body2" className={classes.resendCode}>
              <Link onClick={() => resendCode()} underline="always">
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
                  onClick={() => verifyEmail(code)}
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
