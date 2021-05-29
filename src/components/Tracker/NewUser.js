import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Button,
  Link,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input1: {
    width: "100%",
    margin: "auto",
  },
  input2: {
    width: "100%",
    paddingTop: "20",
  },
  container: {
    padding: 20,
    textAlign: "center",
    maxHeight: 500,
    overflowY: "scroll",
  },
  buttonContainer: {
    paddingBottom: 20,
    paddingTop: 20,
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

export const NewUser = () => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid
          container
          className={classes.container}
          spacing={3}
          alignContent="center"
          justify="center"
        >
          <Grid
            item
            className={classes.input2}
            alignContent="center"
            justify="center"
          >
            <TextField
              className={`${classes.input2} ${classes.calories}`}
              id="outlined"
              label="Calories"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            className={classes.input1}
            alignContent="center"
            justify="center"
          >
            <TextField
              className={`${classes.input1} ${classes.protein}`}
              id="outlined"
              label="Protein"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            className={classes.input1}
            alignContent="center"
            justify="center"
          >
            <TextField
              className={`${classes.input1} ${classes.fat}`}
              id="outlined"
              label="Fat"
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            className={classes.input1}
            alignContent="center"
            justify="center"
          >
            <TextField
              className={`${classes.input1} ${classes.carbs}`}
              id="outlined"
              label="Carbs"
              variant="outlined"
            />
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.buttonContainer}
          >
            <Grid item xs={12}>
              <Typography variant="h5">
                <Link underline="always">Follow some friends?</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                <Typography variant="h5">Next</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
