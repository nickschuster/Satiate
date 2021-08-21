import {
  Grid,
  TextField,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ImagePlaceholder } from "../../images/placeholder.png";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "100%",
  },
  itemContainer: {
    maxHeight: "300px !important",
    overflowY: "auto",
  },
  item: {
    width: "100%",
    height: 100,
    border: "1px solid black",
  },
  itemImage: {
    backgroundImage: `url(${ImagePlaceholder})`,
    backgroundSize: "cover",
    width: 50,
    height: 50,
    borderRadius: 15,
    border: "1px solid black",
  },
}));

export const AddFriends = () => {
  const classes = useStyles();

  const items = [
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
  ];

  return (
    <>
      <form>
        <Grid container direction="column">
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
          <Grid item className={classes.itemContainer} alignItems="center">
            {items.map((value, key) => (
              <div className={classes.item} key={key}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={value.image} className={classes.itemPicture} />
                <div className={classes.itemName}>{value.name}</div>
                <div className={classes.itemFollow}>
                  <Button>
                    <Typography>
                      {value.following ? "Unfollow" : "Follow"}
                    </Typography>
                  </Button>
                </div>
              </div>
            ))}
          </Grid>
          <Grid container>
            <Grid item>
              <Button>
                <Typography>Back</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <Typography>Next</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
