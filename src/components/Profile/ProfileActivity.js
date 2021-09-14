import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import moment from "moment";

import "react-calendar-heatmap/dist/styles.css";

const useStyles = makeStyles({
  calendar: {
    marginTop: 20,
    marginBottom: 20,
  },
  col: {
    float: "left",
    width: 62,
    border: "1px solid black",
  },
  row: {
    height: 50,
    width: 50,
    margin: 5,
    border: "1px solid black",
  },
});

export const ProfileActivity = () => {
  const classes = useStyles();
  const [endDate, setEndDate] = useState(moment());
  const [values, setValues] = useState([]);

  // Populate values.
  useEffect(() => {
    setValues(getValues());
  }, []);

  // Calculate the start date for the heatmap.
  const getStartDate = () => {
    return getShiftedDate(30, endDate);
  };

  // Shift a date by an amount of days.
  const getShiftedDate = (amount, date) => {
    return moment(date).subtract(amount, "days");
  };

  const getValues = () => {
    const values = [];
    for (let i = 0; i < 5; i++) {
      values.push([]);
      for (let j = 0; j < 6; j++) {
        console.log(i * 6 + j);
        values[i].push({
          date: getShiftedDate(i * 5 + j, endDate),
          value: 0,
        });
      }
    }
    return values;
  };

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <div className={classes.calendar}>
            {values.map((col, colIndex) => (
              <div className={classes.col} key={colIndex}>
                {col.map((row, rowIndex) => (
                  <div className={classes.row} key={rowIndex * (colIndex + 1)}>
                    {row.date.format("DD")}
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
