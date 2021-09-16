import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";
import Arrow from "../../images/arrow.png";

import "react-calendar-heatmap/dist/styles.css";

const useStyles = makeStyles((theme) => ({
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
  },
  prev: {
    height: 25,
  },
  col: {
    height: 64,
  },
  row: {
    height: 50,
    width: 50,
    margin: 5,
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
    float: "left",
    borderRadius: 100,
    textAlign: "center",
  },
  value1: { backgroundColor: theme.palette.text.main + "0C" },
  value2: { backgroundColor: theme.palette.text.main + "7F" },
  value3: { backgroundColor: theme.palette.text.main + "BF" },
  value4: { backgroundColor: theme.palette.text.main + "FF" },
  notActive: {
    opacity: 0.5,
  },
  rowTitle: {
    marginTop: 14,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
}));

export const ProfileActivity = () => {
  const classes = useStyles();
  const [endDate, setEndDate] = useState(moment());
  const [values, setValues] = useState([]);

  // Populate values.
  useEffect(() => {
    setValues(getValues());
  }, []);

  // Shift a date by an amount of days.
  const getShiftedDate = (amount, date) => {
    return moment(date).subtract(amount, "days");
  };

  // Populate the calendar with the previous 30 days.
  const getValues = () => {
    const values = [];
    let index = 0;
    for (let i = 0; i < 6; i++) {
      values.push([]);
      for (let j = 0; j < 6; j++) {
        values[i].push({
          date: getShiftedDate(index, endDate),
          value: getValueAmount(),
        });
        index++;
      }
      values[i].reverse();
    }
    values.reverse();
    return values;
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
    if (value == 1) return classes.value1;
    if (value == 2) return classes.value2;
    if (value == 3) return classes.value3;
    if (value == 4) return classes.value4;
    return "";
  };

  // Determine if this date is part of the currently selected month.
  // Return non active class if it is not.
  const isPartOfActiveMonth = (date) => {
    if (date.format("MM") !== endDate.format("MM")) return classes.notActive;
    return "";
  };

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Grid container justify="space-evenly" className={classes.controls}>
            <Grid item>
              <img src={Arrow} className={classes.prev} alt="prev month." />
            </Grid>
            <Grid item>
              <Typography variant="h5" color="secondary">
                {getCurrentMonth()}
              </Typography>
            </Grid>
            <Grid item>
              <img src={Arrow} className={classes.next} alt="next month." />
            </Grid>
          </Grid>
          <div className={classes.calendar}>
            {values.map((col, colIndex) => (
              <div className={classes.col} key={colIndex}>
                {col.map((row, rowIndex) => (
                  <div
                    className={`${classes.row} ${getValueColor(
                      row.value
                    )} ${isPartOfActiveMonth(row.date)}`}
                    key={rowIndex * (colIndex + 1)}
                  >
                    <div className={classes.rowTitle}>
                      {row.date.format("D")}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};
