import { Button, Typography, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ImagePlaceholder from "../../images/placeholder.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20,
    maxWidth: "90vw",
  },
  itemContainer: {
    maxHeight: 500,
    width: "100%",
    overflowY: "auto",
  },
  item: {
    height: 100,
    width: "100%",
  },
  itemImage: {
    backgroundImage: `url(${ImagePlaceholder})`,
    backgroundSize: "cover",
    borderRadius: 500,
    height: 75,
    width: 75,
    float: "left",
    margin: 7,
    border: "2px solid",
  },
  itemName: {
    float: "left",
    maxWidth: "calc(90% - 120px)",
    overflow: "hidden",
    whitespace: "nowrap",
    textOverflow: "ellipsis",
    marginTop: 28,
    marginLeft: 10,
  },
  first: {
    borderColor: theme.palette.first.main,
  },
  second: {
    borderColor: theme.palette.second.main,
  },
  third: {
    borderColor: theme.palette.third.main,
  },
  noplace: {
    borderColor: theme.palette.text.main,
  },
  buttonContainer: {
    marginTop: 10,
  },
}));

export const SeeLeaderboard = () => {
  const classes = useStyles();

  const [items, setItems] = useState([
    {
      name: "test",
      image: "test",
    },
    {
      name: "test",
      image: "test",
    },
    {
      name: "test",
      image: "test",
    },
    {
      name: "test",
      image: "test",
    },
    {
      name: "test",
      image: "test",
    },
    {
      name: "test",
      image: "test",
    },
    {
      name: "test",
      image: "test",
    },
  ]);

  // Set a border color if profile is in top 3.
  const getBorderColor = (key) => {
    if (key === 0) return classes.first;
    if (key === 1) return classes.second;
    if (key === 2) return classes.third;
    return classes.noplace;
  };

  return (
    <>
      <form>
        <Grid container className={classes.container}>
          <Grid item className={classes.itemContainer}>
            {items.map((value, key) => (
              <div className={classes.item} key={key}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={value.image}
                  className={`${classes.itemImage} ${getBorderColor(key)}`}
                />
                <div className={classes.itemName}>
                  <Typography variant="h5">{value.name}</Typography>
                </div>
              </div>
            ))}
          </Grid>
          <Grid
            container
            justify="space-evenly"
            className={classes.buttonContainer}
          >
            <Button variant="outlined" color="primary">
              <Typography variant="h5">Back</Typography>
            </Button>
            <Button variant="contained" color="primary">
              <Typography variant="h5">Next</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
