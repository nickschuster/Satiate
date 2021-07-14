import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { formIsValid, validate, validateAll } from "../../util/formValidation";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
  },
  buttonContainer: {
    paddingTop: 20,
    paddingBottom: 30,
    textAlign: "center",
  },
  container: {
    paddingTop: 30,
  },
  calories: {
    "& .MuiFormLabel-root": {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
  },
  fat: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${theme.palette.fat.main} !important`,
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.fat.main,
    },
  },
  protein: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${theme.palette.protein.main} !important`,
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.protein.main,
    },
  },
  carbs: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${theme.palette.carbs.main} !important`,
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.carbs.main,
    },
  },
}));

export const SetGoals = ({ saveGoals }) => {
  const [goals, setGoals] = useState({
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  });

  const [formErrors, setFormErrors] = useState({
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });

  const classes = useStyles();

  // Handle all form value updates.
  const handleChange = (event, type) => {
    const value = event.target.value;
    setGoals((prev) => {
      prev[type] = value;
      return { ...prev };
    });
    validate(type, value, setFormErrors);
  };

  // Handle the form submit.
  const handleSubmit = () => {
    validateAll(formErrors, goals, setFormErrors);
    if (formIsValid(formErrors)) {
      saveGoals(goals);
    }
  };

  return (
    <>
      <form>
        <Grid
          container
          spacing={3}
          justify="center"
          className={classes.container}
        >
          <Grid item xs={10}>
            <TextField
              className={`${classes.input} ${classes.calories}`}
              id="outlined"
              label="Calorie goal"
              variant="outlined"
              type="number"
              value={goals.calories}
              onChange={(event) => handleChange(event, "calories")}
              error={!!formErrors.calories}
              helperText={formErrors.calories}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={`${classes.input} ${classes.protein}`}
              id="outlined"
              label="Protein goal"
              variant="outlined"
              type="number"
              value={goals.protein}
              onChange={(event) => handleChange(event, "protein")}
              error={!!formErrors.protein}
              helperText={formErrors.protein}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={`${classes.input} ${classes.fat}`}
              id="outlined"
              label="Fat goal"
              variant="outlined"
              type="number"
              value={goals.fat}
              onChange={(event) => handleChange(event, "fat")}
              error={!!formErrors.fat}
              helperText={formErrors.fat}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={`${classes.input} ${classes.carbs}`}
              id="outlined"
              label="Carb goal"
              variant="outlined"
              type="number"
              value={goals.carbs}
              onChange={(event) => handleChange(event, "carbs")}
              error={!!formErrors.carbs}
              helperText={formErrors.carbs}
            />
          </Grid>
          <Grid
            container
            spacing={3}
            className={classes.buttonContainer}
            justify="center"
          >
            <Grid item xs={10}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleSubmit();
                }}
              >
                <Typography variant="h5">Next</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
