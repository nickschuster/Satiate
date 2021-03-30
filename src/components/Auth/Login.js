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
    maxWidth: 400,
    flexGrow: 1,
  },
  input: {
    width: "100%",
    marginTop: 20,
  },
  account: {
    color: theme.palette.text.main,
    textDecoration: "underline",
    cursor: "pointer",
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
              className={classes.input}
              id="outlined"
              label="Email, username or phone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input}
              id="outlined"
              label="Password"
              variant="outlined"
            />
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
                <Typography variant="h5" className={classes.account}>
                  <Link
                    color="inherit"
                    onClick={() => setAuthState("create account")}
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
