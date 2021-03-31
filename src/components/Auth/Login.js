import {
  makeStyles,
  TextField,
  Grid,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import React from "react";

// Styling.
const useStyles = makeStyles((theme) => ({
  form: {
    minWidth: 285,
    maxWidth: 450,
    flexGrow: 1,
  },
  password: {
    width: "100%",
    marginTop: 20,
  },
  username: {
    width: "100%",
    marginTop: 30,
  },
  forgotPassword: {
    paddingLeft: 14,
  },
  control: {
    marginBottom: 10,
  },
}));

export const Login = ({ setAuthState }) => {
  const classes = useStyles();

  return (
    <>
      <form className={classes.form}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10}>
            <TextField
              className={classes.username}
              id="outlined"
              label="Email, username or phone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.password}
              id="outlined"
              label="Password"
              variant="outlined"
            />
            <Typography variant="body2" className={classes.forgotPassword}>
              <Link
                onClick={() => setAuthState("forgot password")}
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
              justify="center"
              direction="row"
              alignItems="center"
              className={classes.control}
            >
              <Grid item>
                <Typography variant="h5">
                  <Link
                    onClick={() => setAuthState("create account")}
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
                  onClick={() => setAuthState("logging in")}
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
