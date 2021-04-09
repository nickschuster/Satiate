import React from "react";
import {
  Grid,
  makeStyles,
  TextField,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import {
  SaveOutlined,
  Close,
  InsertDriveFileOutlined,
  Add,
} from "@material-ui/icons";
import { TrackerStates } from "./TrackerStates";

const useStyles = makeStyles((theme) => ({
  input1: {
    width: "100%",
  },
  formItem: {
    marginTop: 20,
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: "red",
  },
  container: {
    padding: 20,
    textAlign: "center",
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

export const AddMeal = ({ setTrackerState, addMeal }) => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid container className={classes.container}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.formItem}
          >
            <Grid item xs={8}>
              <TextField
                className={classes.input1}
                id="outlined"
                label="Meal name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton color="primary">
                <SaveOutlined />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <IconButton color="primary">
                <InsertDriveFileOutlined />
              </IconButton>
            </Grid>
          </Grid>
          <div className={`${classes.seperator} ${classes.formItem}`} />
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.formItem}
          >
            <Grid item xs={6}>
              <TextField
                className={classes.input1}
                id="outlined"
                label="Ingredient name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton color="primary">
                <SaveOutlined />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <IconButton color="primary">
                <InsertDriveFileOutlined />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <IconButton color="primary">
                <Close />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.formItem}
            justify="space-evenly"
            spacing={1}
          >
            <Grid item xs={6} lg={3}>
              <TextField
                className={classes.calories}
                id="outlined"
                label="Calories"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <TextField
                className={classes.protein}
                id="outlined"
                label="Protein"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <TextField
                className={classes.fat}
                id="outlined"
                label="Fat"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <TextField
                className={classes.carbs}
                id="outlined"
                label="Carbs"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.formItem}
            alignItems="center"
            justify="center"
          >
            <IconButton color="primary">
              <Add />
            </IconButton>
          </Grid>
          <Grid container className={classes.formItem} justify="space-evenly">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setTrackerState(TrackerStates.default)}
            >
              <Typography variant="h5">Cancel</Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addMeal();
                setTrackerState(TrackerStates.default);
              }}
            >
              <Typography variant="h5">Save</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
