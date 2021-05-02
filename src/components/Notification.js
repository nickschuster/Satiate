import React from "react";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  notifContainer: {
    position: "absolute",
    top: 10,
    left: "50%",
    height: 60,
    width: 1000,
    maxWidth: "90vw",
    backgroundColor: theme.palette.secondary.main,
    transform: "translate(-50%)",
    borderRadius: 15,
  },
  notifClose: {
    float: "left",
    width: 60,
    height: 60,
    borderColor: theme.palette.secondary.main,
    border: "2px solid",
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 3,
  },
  notifContent: {
    padding: 20,
    whiteSpace: "nowrap",
    width: "calc(100% - 60px)",
    float: "right",
  },
  notifText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export const Notification = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.notifContainer}>
        <div className={classes.notifClose}>
          <IconButton color="secondary">
            <Close />
          </IconButton>
        </div>
        <div className={classes.notifContent}>
          <Typography variant="body2" className={classes.notifText}>
            Test notifiaction text Test notifiaction text Test notifiaction text
            Test notifiaction text v vTest notifiaction textTest notifiaction
            text Test notifiaction text
          </Typography>
        </div>
      </div>
    </>
  );
};
