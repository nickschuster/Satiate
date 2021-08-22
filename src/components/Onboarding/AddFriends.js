import {
  Grid,
  TextField,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ImagePlaceholder from "../../images/placeholder.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 20,
    width: 400,
    maxWidth: "90vw",
  },
  input: {
    width: "100%",
  },
  itemContainer: {
    maxHeight: "300px !important",
    overflowY: "auto",
    marginTop: 10,
  },
  item: {
    width: "100%",
    height: 75,
  },
  itemImage: {
    backgroundImage: `url(${ImagePlaceholder})`,
    backgroundSize: "cover",
    width: 50,
    height: 50,
    margin: 11,
    borderRadius: 50,
    border: "2px solid",
    borderColor: theme.palette.text.main,
    float: "left",
  },
  itemName: {
    float: "left",
    maxWidth: 70,
    maxHeight: "20px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    marginTop: 25,
    whiteSpace: "nowrap",
  },
  itemFollow: {
    marginTop: 12,
    float: "right",
  },
  buttonContainer: {
    marginTop: 10,
  },
}));

export const AddFriends = () => {
  const classes = useStyles();

  const [items, setItems] = useState([
    {
      image: "test",
      name: "test",
      following: false,
    },
    {
      image: "test",
      name: "testasdfsssss asdf asdf asdf",
      following: false,
    },
    {
      image: "test",
      name: "test",
      following: false,
    },
    {
      image: "test",
      name: "test",
      following: false,
    },
    {
      image: "test",
      name: "test",
      following: false,
    },
  ]);

  const followProfile = (key) => {
    setItems((prev) => {
      prev[key].following = !prev[key].following;
      return [...prev];
    });
  };

  return (
    <>
      <form>
        <Grid container direction="column" className={classes.container}>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              id="outlined"
              label="Search for a friend"
              variant="outlined"
              // value={user.email}
              // onChange={(event) => handleChange("email", event)}
              // error={!!formErrors.email}
              // helperText={formErrors.email}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            {items.map((value, key) => (
              <div className={classes.item} key={key}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={value.image} className={classes.itemImage} />
                <div className={classes.itemName}>{value.name}</div>
                <div className={classes.itemFollow}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => followProfile(key)}
                  >
                    <Typography variant="body1">
                      {value.following ? "Unfollow" : "Follow"}
                    </Typography>
                  </Button>
                </div>
              </div>
            ))}
          </Grid>
          <Grid
            container
            justify="space-evenly"
            className={classes.buttonContainer}
          >
            <Grid item>
              <Button variant="outlined" color="primary">
                <Typography variant="h5">Back</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                <Typography variant="h5">Next</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
