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

export const ResetPassword = ({
  setAuthState,
  resetPassword,
  forgotPassword,
}) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
    code: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
  });

  // Validate confirmPassword.
  const validateConfirmPassword = () => {
    if (user.confirmPassword !== user.password) return "Passwords must match.";
  };

  // Update the form values.
  const handleChange = (type, event) => {
    const value = event.target.value;
    setUser((prev) => {
      prev[type] = value;
      return { ...prev };
    });
    validate(type, value, setFormErrors);
  };

  // Reset the user password.
  const handleSubmit = () => {
    validateAll(formErrors, user, setFormErrors);
    if (formIsValid(formErrors) && !validateConfirmPassword()) {
      resetPassword(user);
    }
  };

  // Handle showing password and confirm password visibility.
  const hanldeShowPasswordClick = (value, type) => {
    setUser((prev) => {
      prev[type] = value;
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
              label="New password"
              variant="outlined"
              value={user.password}
              type={user.showPassword ? "text" : "password"}
              onChange={(evt) => handleChange("password", evt)}
              error={!!formErrors.password}
              helperText={formErrors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        hanldeShowPasswordClick(
                          !user.showPassword,
                          "showPassword"
                        )
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
            <TextField
              className={classes.input2}
              id="outlined"
              label="Confirm new password"
              variant="outlined"
              type={user.showConfirmPassword ? "text" : "password"}
              value={user.confirmPassword}
              onChange={(evt) => handleChange("confirmPassword", evt)}
              error={!!validateConfirmPassword()}
              helperText={validateConfirmPassword()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        hanldeShowPasswordClick(
                          !user.showConfirmPassword,
                          "showConfirmPassword"
                        )
                      }
                    >
                      {user.showConfirmPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input2}
              id="outlined"
              label="Verification code"
              variant="outlined"
              value={user.code}
              onChange={(evt) => handleChange("code", evt)}
            />
            <Typography variant="body2" className={classes.resendCode}>
              <Link onClick={() => forgotPassword()} underline="always">
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
                  onClick={() => handleSubmit()}
                >
                  <Typography variant="h5">Reset</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
