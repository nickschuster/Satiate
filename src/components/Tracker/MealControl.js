import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { SaveOutlined, Close, SystemUpdateAlt, Add } from "@material-ui/icons";
import { TrackerStates } from "./TrackerStates";
import { Keygen } from "../../util/keygen";
import { CommonlyUsed } from "./CommonlyUsed";

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

export const MealControl = ({ setTrackerState, addMeal, editMeal }) => {
  const classes = useStyles();
  const [meal, setMeal] = useState(
    editMeal
      ? { ...editMeal }
      : {
          name: "",
          ingredients: {
            [Keygen.getKey()]: {
              name: "",
              calories: 0,
              protein: 0,
              fat: 0,
              carbs: 0,
            },
          },
        }
  );
  const [loadCommon, setLoadCommon] = useState(false);

  useEffect(() => {
    if (!meal || Object.keys(meal.ingredients) === 0) {
      resetForm();
    }
  }, [meal]);

  // Add a new empty ingredient.
  const addIngredient = () => {
    setMeal((prev) => {
      prev.ingredients[Keygen.getKey()] = {
        name: "",
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
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
            calories: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
          },
        },
      };
    });
  };

  // Load an ingredient from the common ingredient list.
  const loadCommonIngredient = () => {
    console.log("Load common ingredient");

    // Change tracker state.
    setLoadCommon(true);

    // Wait for callback that gets the selected ingredient or cancels operation.

    // Pass selected ingredient to meal control.
  };

  // Load a meal from the common meal list.
  const loadCommonMeal = () => {
    console.log("Load common meal");

    // Change state.
    setLoadCommon(true);

    // Wait for callback that gets the selected meal or cancels operation.

    // Pass selected meal to meal control.
  };

  // Save an ingredient to the common ingredient list.
  const saveCommonIngredient = () => {
    console.log("Save common ingredient");

    // API call to save the ingredient.

    // Display notification of status.
  };

  // Save a meal to the common ingredient list.
  const saveCommonMeal = () => {
    console.log("Save common meal");

    // API call to save the meal.

    // Display notification of status.
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
              <IconButton color="primary" onClick={() => loadCommonMeal()}>
                <SaveOutlined />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <IconButton color="primary" onClick={() => saveCommonMeal()}>
                <SystemUpdateAlt />
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
                  <IconButton
                    color="primary"
                    onClick={() => saveCommonIngredient()}
                  >
                    <SaveOutlined />
                  </IconButton>
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    color="primary"
                    aria-label=""
                    onClick={() => loadCommonIngredient()}
                  >
                    <SystemUpdateAlt />
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

      {loadCommon ? (
        <div className={classes.commonlyUsed}>
          <CommonlyUsed />
        </div>
      ) : null}
    </>
  );
};
