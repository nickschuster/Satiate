import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

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
  const [goals] = useState({
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  });

  const classes = useStyles();

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
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={`${classes.input} ${classes.protein}`}
              id="outlined"
              label="Protein goal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={`${classes.input} ${classes.fat}`}
              id="outlined"
              label="Fat goal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={`${classes.input} ${classes.carbs}`}
              id="outlined"
              label="Carb goal"
              variant="outlined"
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
                  saveGoals(goals);
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
