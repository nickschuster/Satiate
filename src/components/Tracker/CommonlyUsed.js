import React, { useEffect, useState } from "react";
import { makeStyles, Grid, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Arrow from "../../images/arrow.png";
import { TrackerStates } from "./TrackerStates";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "50vh",
    maxWidth: "90vw",
    width: "500px",
    height: "502px",
    borderRadius: 15,
    overflow: "hidden",
  },
  controlBG: {
    maxHeight: "50vh",
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
    maxHeight: "50vh",
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
    maxHeight: "50vh",
    position: "absolute",
    width: "calc(100% - 10px)",
    height: "99%",
    textAlign: "center",
    overflowX: "auto",
    paddingTop: 20,
    borderRadius: 15,
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
}));

export const CommonlyUsed = ({
  setTrackerState,
  commonMeals,
  commonIngredients,
  commonlyUsedState,
  setCommonlyUsedState,
}) => {
  const classes = useStyles();

  const [expansions, setExpansions] = useState([]);
  const [display, setDisplay] = useState([]);

  // Fill with state.
  useEffect(() => {
    console.log("Populate");
    console.log(commonMeals, commonIngredients);
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
              <Grid container key={key}>
                {value.ingredients ? (
                  <div
                    className={classes.control}
                    role="button"
                    tabIndex="0"
                    onClick={() => toggleExpansion(key)}
                    onKeyPress={() => toggleExpansion(key)}
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
                <div className={classes.detail}>
                  <div className={classes.detailTitle}>
                    {value.name || "Not provided."}
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
                            <h1 key={key}>{value.name || "Not provided."}</h1>
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
