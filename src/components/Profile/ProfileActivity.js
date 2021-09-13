import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import moment from "moment";

import "react-calendar-heatmap/dist/styles.css";

export const ProfileActivity = () => {
  const [endDate, setEndDate] = useState(new Date());

  // Calculate the start date for the heatmap.
  const getStartDate = () => {
    return endDate.subtract(100, "d");
  };

  // Get the values for the heatmap.
  const getValues = getRange(200).map((index) => {
    return {
      date: shiftDate(endDate, -index),
      count: getRandomInt(1, 3),
    };
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  return (
    <>
      <Grid container>
        <CalendarHeatmap
          startDate={shiftDate(endDate, -150)}
          endDate={endDate}
          values={getValues}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-github-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `${value.date
                .toISOString()
                .slice(0, 10)} has count: ${value.count}`,
            };
          }}
          onClick={(value) =>
            alert(`Clicked on value with count: ${value.count}`)
          }
        />
        <ReactTooltip />
      </Grid>
    </>
  );
};
