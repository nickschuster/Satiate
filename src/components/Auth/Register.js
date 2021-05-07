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
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { AuthStates } from "./AuthStates";
import { formIsValid, validate, validateAll } from "../../util/formValidation";

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

export const Register = ({ setAuthState, register }) => {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Register the user if form is valid.
  const handleSubmit = () => {
    validateAll(formErrors, user, setFormErrors);
    if (formIsValid(formErrors)) {
      register(user);
    }
  };

  // Update the input field value.
  const handleChange = (event, type) => {
    const value = event.target.value;
    setUser((prev) => {
      prev[type] = value;
      return { ...prev };
    });
    validate(type, value, setFormErrors);
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
              error={!!formErrors.name}
              helperText={formErrors.name}
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
              error={!!formErrors.email}
              helperText={formErrors.email}
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
              error={!!formErrors.password}
              helperText={formErrors.password}
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
                  onClick={() => handleSubmit()}
                >
                  <Typography variant="h5">Create Account</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
