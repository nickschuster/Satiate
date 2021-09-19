import React, { useEffect, useState } from "react";
import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";
import Arrow from "../../images/arrow.png";

import "react-calendar-heatmap/dist/styles.css";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  viewActivity: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    width: 400,
    height: 500,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 15,
    padding: 30,
  },
  exitActivity: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  calendar: {
    marginTop: 20,
    marginBottom: 20,
  },
  controls: {
    marginTop: 20,
  },
  next: {
    height: 25,
    transform: "rotate(180deg)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  prev: {
    height: 25,
    "&:hover": {
      cursor: "pointer",
    },
  },
  row: {
    height: 64,
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  item: {
    height: 50,
    width: 50,
    margin: 5,
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
    float: "left",
    borderRadius: 100,
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      boxShadow: `0px 0px 5px 2px ${theme.palette.text.main}`,
    },
  },
  value1: { backgroundColor: theme.palette.text.main + "0C" },
  value2: { backgroundColor: theme.palette.text.main + "7F" },
  value3: { backgroundColor: theme.palette.text.main + "BF" },
  value4: { backgroundColor: theme.palette.text.main + "FF" },
  notActive: {
    opacity: 0.5,
  },
  itemTitle: {
    marginTop: 14,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
}));

export const ProfileActivity = () => {
  const classes = useStyles();
  const [endDate, setEndDate] = useState(moment());
  const [values, setValues] = useState([]);
  const [activityView, setActivityView] = useState(undefined);

  // Populate values.
  useEffect(() => {
    const clacValues = [];
    let index = 0;
    for (let i = 0; i < 6; i++) {
      clacValues.push([]);
      for (let j = 0; j < 6; j++) {
        clacValues[i].push({
          date: getShiftedDate(index, endDate),
          value: getValueAmount(),
        });
        index++;
      }
      clacValues[i].reverse();
    }
    clacValues.reverse();
    setValues(clacValues);
  }, [endDate]);

  // Shift a date by an amount of days.
  const getShiftedDate = (amount, date) => {
    return moment(date).subtract(amount, "days");
  };

  // Get the string representation of the currently displayed month.
  const getCurrentMonth = () => {
    return endDate.format("MMMM");
  };

  // Get the score for a particular date.
  const getValueAmount = (date) => {
    return Math.floor(Math.random() * 5);
  };

  // Get the color class for the respective value.
  const getValueColor = (value) => {
    if (value === 1) return classes.value1;
    if (value === 2) return classes.value2;
    if (value === 3) return classes.value3;
    if (value === 4) return classes.value4;
    return "";
  };

  // Determine if this date is part of the currently selected month.
  // Return non active class if it is not.
  const isPartOfActiveMonth = (date, boolean) => {
    if (date.format("MM") !== endDate.format("MM"))
      return boolean ? classes.notActive : "";
    return boolean ? "" : classes.notActive;
  };

  // Shift endDate forward one month.
  const nextMonth = () => {
    let today = moment();
    let difference = today.diff(endDate, "days");
    if (difference !== 0) {
      if (difference < today.daysInMonth()) {
        setEndDate(today);
      } else {
        setEndDate(moment(endDate).add(1, "M"));
      }
    }
  };

  // Shift endDate backward one month.
  const prevMonth = () => {
    let days = parseInt(endDate.format("D"));
    setEndDate(getShiftedDate(days, endDate));
  };

  // Show the activity for a particular date.
  const viewActivity = (item) => {
    setActivityView(item);
  };

  // Close activity view;
  const closeActivity = () => {
    setActivityView(undefined);
  };

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Grid container justify="space-evenly" className={classes.controls}>
            <Grid
              item
              role="button"
              tabIndex={0}
              onKeyPress={prevMonth}
              onClick={prevMonth}
            >
              <img src={Arrow} className={classes.prev} alt="prev month." />
            </Grid>
            <Grid item>
              <Typography variant="h5" color="secondary">
                {getCurrentMonth()}
              </Typography>
            </Grid>
            <Grid
              item
              role="button"
              tabIndex={-1}
              onKeyPress={nextMonth}
              onClick={nextMonth}
            >
              <img
                src={Arrow}
                className={`${classes.next} ${isPartOfActiveMonth(
                  moment(),
                  false
                )}`}
                alt="next month."
              />
            </Grid>
          </Grid>
          <div className={classes.calendar}>
            {values.map((row, colIndex) => (
              <div className={classes.row} key={colIndex}>
                {row.map((item, itemIndex) => (
                  <div
                    className={`${classes.item} ${getValueColor(
                      item.value
                    )} ${isPartOfActiveMonth(item.date, true)}`}
                    key={itemIndex * (colIndex + 1)}
                    role="button"
                    tabIndex={-1 * (itemIndex * (colIndex + 1)) - 2}
                    onKeyPress={() => viewActivity(item)}
                    onClick={() => viewActivity(item)}
                  >
                    <div className={classes.itemTitle}>
                      {item.date.format("D")}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Grid>
      </Grid>

      {activityView !== undefined ? (
        <div className={classes.viewActivity}>
          <div className={classes.exitActivity}>
            <IconButton color="primary" onClick={closeActivity}>
              <Close />
            </IconButton>
          </div>
          <Typography variant="h5" color="primary" align="center">
            {activityView.date.format("LL")}
          </Typography>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
