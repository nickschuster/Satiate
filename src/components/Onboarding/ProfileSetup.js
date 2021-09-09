import React from "react";
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import ProfilePlaceholder from "../../images/placeholder.png";
import { useNotification } from "../Notification";

const useStyles = makeStyles((theme) => ({
  profileImageContainer: {
    height: 175,
    width: 175,
    borderRadius: 100,
    marginTop: 40,
    marginBottom: 10,
  },
  profileImage: {
    backgroundImage: `url(${ProfilePlaceholder})`,
    backgroundSize: "cover",
    width: "inherit",
    height: "inherit",
    borderRadius: 100,
    border: "1px solid black",
  },
  editImage: {
    position: "absolute",
    left: "calc(50% + 55px)",
    top: 170,
  },
  input: {
    width: "100%",
  },
  control: {
    marginBottom: 20,
  },
}));

export const ProfileSetup = ({ saveProfile, goBack }) => {
  const classes = useStyles();
  const { addNotification } = useNotification();

  // Select an image to upload.
  const selectImage = () => {
    const imageInput = document.getElementById("image-upload");
    imageInput.click();
  };

  // Save the updated profile information.
  const handleSubmit = () => {
    // TODO form validation.
    saveProfile();
  };

  // Upload a selected image.
  const uploadImage = async () => {
    try {
      let image = await new Promise((resolve, reject) => {
        const filePicker = document.getElementById("image-upload");

        // Make sure an image was selected.
        if (!filePicker || !filePicker.files || filePicker.files.length <= 0) {
          reject("No file selected.");
          return;
        }

        const image = filePicker.files[0];

        // Limit file size.
        if (image.size > 2048576) {
          reject("Image is too big (max. 2 Mb)");
          return;
        }

        // Make sure its an image.
        if (!image.type.includes("image")) {
          reject("Uploaded file is not a valid image.");
          return;
        }

        resolve(image);
        return;
      });

      displayImage(image);
    } catch (e) {
      let message = e;
      if (!typeof e === "string") {
        message = e.message;
      }
      addNotification(message);
    }
  };

  // Show the uploaded image for preview.
  const displayImage = (image) => {
    let display = document.getElementById("profile-image");
    display.src = URL.createObjectURL(image);
  };

  return (
    <>
      <form>
        <Grid container spacing={3} justify="center">
          <Grid>
            <div className={classes.profileImageContainer}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img className={classes.profileImage} id="profile-image" src="" />
            </div>
            <div className={classes.editImage}>
              <input
                id="image-upload"
                hidden
                type="file"
                accept="image/x-png,image/jpeg,image/gif"
                onChange={() => uploadImage()}
              />
              <IconButton color="primary" onClick={() => selectImage()}>
                <EditOutlined />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input}
              id="outlined"
              label="Name"
              variant="outlined"
              // value={user.email}
              // onChange={(event) => handleChange("email", event)}
              // error={!!formErrors.email}
              // helperText={formErrors.email}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.input}
              id="outlined"
              label="Username"
              variant="outlined"
              // value={user.email}
              // onChange={(event) => handleChange("email", event)}
              // error={!!formErrors.email}
              // helperText={formErrors.email}
            />
          </Grid>
          <Grid item sx={10}>
            <Grid
              container
              spacing={3}
              justify="space-evenly"
              direction="row"
              alignItems="center"
              className={classes.control}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => goBack()}
                >
                  <Typography variant="h5">Back</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSubmit()}
                >
                  <Typography variant="h5">Next</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
