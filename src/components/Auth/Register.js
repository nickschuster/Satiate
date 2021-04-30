import React, { useState } from "react";
import {
  Grid,
  TextField,
  makeStyles,
  Link,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Loader } from "../Loader";
import { Visibility, VisibilityOff } from "@material-ui/icons";
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
  control: {
    marginBottom: 10,
    [theme.breakpoints.down(400)]: {
      justifyContent: "center",
    },
  },
}));

export const Register = ({ setAuthState, register, loadStatus }) => {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  // Update the input field value.
  const handleChange = (event, type) => {
    const value = event.target.value;
    setUser((prev) => {
      prev[type] = value;
      return { ...prev };
    });
  };

  // Change the password visibility.
  const hanldeShowPasswordClick = (value) => {
    setUser((prev) => {
      prev.showPassword = value;
      return { ...prev };
    });
  };

  return (
    <>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10}>
            <TextField
              className={classes.input1}
              id="outlined"
              label="Name"
              variant="outlined"
              value={user.name}
              onChange={(event) => handleChange(event, "name")}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input2}
              id="outlined"
              label="Email"
              variant="outlined"
              value={user.email}
              onChange={(event) => handleChange(event, "email")}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input2}
              id="outlined"
              label="Password"
              variant="outlined"
              type={user.showPassword ? "text" : "password"}
              value={user.password}
              onChange={(event) => handleChange(event, "password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        hanldeShowPasswordClick(!user.showPassword)
                      }
                    >
                      {user.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
                  onClick={() => register(user)}
                >
                  <Typography variant="h5">Create Account</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Loader show={loadStatus} />
    </>
  );
};
