import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Arrow from "../../images/arrow.png";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "50vh",
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
    width: "490px",
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
}));

export const CommonlyUsed = () => {
  const classes = useStyles();

  const [expansions, setExpansions] = useState([]);

  const meals = [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
  ];

  // Fill with state.
  useEffect(() => {
    let size = meals.length;
    let array = [];
    while (--size) array[size] = false;

    setExpansions(array);
  }, []);

  // Toggle the expansion of a particular item.
  const toggleExpansion = (key) => {
    // Don't forget to check if it is even expandable.
    setExpansions((prev) => {
      prev[key] = !prev[key];
      return { ...prev };
    });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.controlBG}></div>
        <div className={classes.detailBG}></div>
        <div className={classes.content}>
          {meals.map((value, key) => {
            return (
              <Grid container key={key}>
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
                <div className={classes.detail}>
                  <div className={classes.detailTitle}>CONTENT TITLE</div>
                  <div className={classes.detailContent}>CONTENT</div>
                </div>
              </Grid>
            );
          })}
        </div>
      </div>
    </>
  );
};
