import React, { useEffect, useState } from "react";
import { makeStyles, Grid, IconButton, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Arrow from "../../images/arrow.png";
import { TrackerStates } from "./TrackerStates";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "90vh",
    maxWidth: "90vw",
    width: "500px",
    height: "502px",
    borderRadius: 15,
    overflow: "hidden",
  },
  controlBG: {
    maxHeight: "90vh",
    width: 75,
    height: 500,
    float: "left",
    border: "2px solid",
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  detailBG: {
    maxHeight: "90vh",
    height: 500,
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
    width: "calc(100% - 75px)",
    float: "right",
    backgroundColor: theme.palette.secondary.main,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  content: {
    maxHeight: "90vh",
    position: "absolute",
    width: "calc(100% - 10px)",
    height: "99%",
    textAlign: "center",
    overflowX: "auto",
    paddingTop: 20,
    borderRadius: 15,
  },
  contentItem: {
    paddingTop: 10,
  },
  control: {
    float: "left",
    width: 75,
  },
  detail: {
    float: "right",
    width: "calc(100% - 75px)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
  detailItem: {
    padding: 10,
  },
  detailContent: {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.5s ease",
  },
  detailContentActive: {
    maxHeight: 250,
  },
  detailScroll: {
    maxHeight: "inherit",
    overflowX: "auto",
  },
  arrow: {
    height: 50,
    padding: 5,
    marginTop: 10,
    transform: "rotate(180deg)",
    transition: "transform 0.5s ease",
  },
  arrowActive: {
    transform: "rotate(270deg)",
  },
  close: {
    position: "absolute",
    top: 2,
    right: 2,
    zIndex: 5000,
  },
  calories: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  protein: {
    color: theme.palette.protein.main,
  },
  fat: {
    color: theme.palette.fat.main,
  },
  carbs: {
    color: theme.palette.carbs.main,
  },
}));

export const CommonlyUsed = ({
  setTrackerState,
  commonMeals,
  commonIngredients,
  setCommonlyUsedState,
}) => {
  const classes = useStyles();

  const [expansions, setExpansions] = useState([]);
  const [display, setDisplay] = useState([]);

  // Fill with state.
  useEffect(() => {
    let size = commonMeals.length + commonIngredients;
    let array = [];
    while (--size) array[size] = false;
    setDisplay([...commonMeals.items, ...commonIngredients.items]);

    setExpansions(array);
  }, [commonMeals, commonIngredients]);

  // Toggle the expansion of a particular item.
  const toggleExpansion = (key) => {
    // Don't forget to check if it is even expandable.
    setExpansions((prev) => {
      prev[key] = !prev[key];
      return { ...prev };
    });
  };

  // Exit commonly used.
  const close = () => {
    setTrackerState(TrackerStates.addMeal);
  };

  // Calculate the total for a meal or return the ingredient value.
  const calculateTotal = (value, type) => {
    if (value.ingredients) {
      let total = 0;
      for (const ing of value.ingredients) total += Number(ing[type]);
      return total;
    } else {
      return value[type];
    }
  };

  // Update the commonly used state with the selected item.
  const handleSelection = (value) => {
    if (value.ingredients) {
      setCommonlyUsedState({
        previousMeal: value,
      });
    } else {
      setCommonlyUsedState((prev) => {
        console.log(prev);
        prev.previousMeal.ingredients[prev.ingredientKey] = { ...value };
        const refCopy = { ...prev.previousMeal };
        return {
          previousMeal: refCopy,
        };
      });
    }

    close();
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.close}>
          <IconButton color="primary" onClick={() => close()}>
            <Close fontSize="large" />
          </IconButton>
        </div>
        <div className={classes.controlBG}></div>
        <div className={classes.detailBG}></div>
        <div className={classes.content}>
          {display.map((value, key) => {
            return (
              <Grid container key={key} className={classes.contentItem}>
                {value.ingredients ? (
                  <div
                    className={classes.control}
                    role="button"
                    tabIndex="0"
                    onClick={() => toggleExpansion(key)}
                    onKeyPress={() => toggleExpansion(key)}
                    justify="center"
                  >
                    <img
                      className={`${classes.arrow} ${
                        expansions[key] ? classes.arrowActive : ""
                      }`}
                      src={Arrow}
                      alt=">"
                    />
                  </div>
                ) : (
                  <div className={classes.control}></div>
                )}
                <div
                  className={classes.detail}
                  role="button"
                  tabIndex="0"
                  onClick={() => handleSelection(value)}
                  onKeyPress={() => handleSelection(value)}
                >
                  <div className={classes.detailTitle}>
                    <Grid container>
                      <Grid container justify="center">
                        <Grid item>
                          <Typography noWrap className={classes.title}>
                            {value.name || "Not provided."}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container justify="center">
                        <Grid item>
                          <Typography className={classes.calories}>
                            {calculateTotal(value, "calories")}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container justify="space-evenly">
                        <Grid item>
                          <Typography className={classes.protein}>
                            {calculateTotal(value, "protein")}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.fat}>
                            {calculateTotal(value, "fat")}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.carbs}>
                            {calculateTotal(value, "carbs")}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  <div
                    className={`${classes.detailContent} ${
                      expansions[key] ? classes.detailContentActive : ""
                    }`}
                  >
                    <div className={classes.detailScroll}>
                      {value.ingredients ? (
                        <div>
                          {value.ingredients.map((value, key) => (
                            <Grid
                              container
                              justify="space-between"
                              key={key}
                              className={classes.detailItem}
                            >
                              <Grid item xs={12} sm={3}>
                                <Typography className={classes.name}>
                                  {value.name || "Not provided."}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography className={classes.calories}>
                                  {value.calories}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography className={classes.protein}>
                                  {value.protein}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography className={classes.fat}>
                                  {value.fat}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography className={classes.carbs}>
                                  {value.carbs}
                                </Typography>
                              </Grid>
                            </Grid>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </div>
      </div>
    </>
  );
};
