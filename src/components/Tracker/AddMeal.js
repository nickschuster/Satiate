import React, { useEffect, useState } from "react";
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
import { Keygen } from "../../util/keygen";

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
    maxHeight: 500,
    overflowY: "scroll",
  },
  buttonContainer: {
    paddingBottom: 20,
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
  const [meal, setMeal] = useState({
    name: "",
    ingredients: {
      [Keygen.getKey()]: {
        name: "",
        calories: "",
        protein: "",
        fat: "",
        carbs: "",
      },
    },
  });

  useEffect(() => {
    if (Object.keys(meal.ingredients) == 0) {
      resetForm();
    }
  }, [meal]);

  // Add a new empty ingredient.
  const addIngredient = () => {
    setMeal((prev) => {
      prev.ingredients[Keygen.getKey()] = {
        name: "",
        calories: "",
        protein: "",
        fat: "",
        carbs: "",
      };
      return { ...prev };
    });
  };

  // Remove an ingredient.
  const removeIngredient = (key) => {
    setMeal((prev) => {
      delete prev.ingredients[key];
      return { ...prev };
    });
  };

  // Track ingredient changes.
  const onIngredientChange = (key, type, value) => {
    setMeal((prev) => {
      prev.ingredients[key][type] = value;
      return { ...prev };
    });
  };

  // Track meal changes.
  const onMealChange = (value) => {
    setMeal((prev) => {
      prev.name = value;
      return { ...prev };
    });
  };

  // Reset form to default state.
  const resetForm = () => {
    setMeal(() => {
      return {
        name: "",
        ingredients: {
          [Keygen.getKey()]: {
            name: "",
            calories: "",
            protein: "",
            fat: "",
            carbs: "",
          },
        },
      };
    });
  };

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
                label="Meal"
                variant="outlined"
                placeholder="e.g. Lunch"
                value={meal.name}
                onChange={(event) => onMealChange(event.target.value)}
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
          {Object.entries(meal.ingredients).map(([key, value]) => (
            <div key={key}>
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
                    label="Ingredient"
                    variant="outlined"
                    placeholder="e.g. Banana"
                    value={value["name"]}
                    onChange={(event) =>
                      onIngredientChange(key, "name", event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <IconButton color="primary">
                    <SaveOutlined />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <IconButton color="primary" aria-label="">
                    <InsertDriveFileOutlined />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    color="primary"
                    onClick={() => removeIngredient(key)}
                  >
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
                    value={value["calories"]}
                    onChange={(event) =>
                      onIngredientChange(key, "calories", event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <TextField
                    className={classes.protein}
                    id="outlined"
                    label="Protein"
                    variant="outlined"
                    value={value["protein"]}
                    onChange={(event) =>
                      onIngredientChange(key, "protein", event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <TextField
                    className={classes.fat}
                    id="outlined"
                    label="Fat"
                    variant="outlined"
                    value={value["fat"]}
                    onChange={(event) =>
                      onIngredientChange(key, "fat", event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={6} lg={3}>
                  <TextField
                    className={classes.carbs}
                    id="outlined"
                    label="Carbs"
                    variant="outlined"
                    value={value["carbs"]}
                    onChange={(event) =>
                      onIngredientChange(key, "carbs", event.target.value)
                    }
                  />
                </Grid>
              </Grid>
            </div>
          ))}
          <Grid
            container
            className={classes.formItem}
            alignItems="center"
            justify="center"
          >
            <IconButton color="primary" onClick={() => addIngredient()}>
              <Add />
            </IconButton>
          </Grid>
          <Grid
            container
            className={`${classes.formItem} ${classes.buttonContainer}`}
            justify="space-evenly"
            spacing={2}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                resetForm();
                setTrackerState(TrackerStates.default);
              }}
            >
              <Typography variant="h5">Cancel</Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addMeal(meal);
                resetForm();
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
