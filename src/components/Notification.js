import React, { createContext, useCallback, useContext, useState } from "react";
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
    transition: "top ease 0.2s",
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
  const { notification, removeNotification } = useNotification();

  return (
    <>
      <div
        className={classes.notifContainer}
        style={notification ? { top: 10 } : { top: -70 }}
      >
        <div className={classes.notifClose}>
          <IconButton color="secondary" onClick={() => removeNotification()}>
            <Close />
          </IconButton>
        </div>
        <div className={classes.notifContent}>
          <Typography variant="body2" className={classes.notifText}>
            {notification || ""}
          </Typography>
        </div>
      </div>
    </>
  );
};

// Notification context.
export const NotifContext = createContext({
  notification: null,
  addNotification: () => {},
  removeNotification: () => {},
});

// Notification context provider.
export const NotifContextProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const addNotification = async (newNotification) => {
    setNotification(null);
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 100);
    });
    setNotification(newNotification);
  };

  const removeNotification = () => setNotification(null);

  const context = {
    notification,
    addNotification: useCallback(
      (notification) => addNotification(notification),
      []
    ),
    removeNotification: useCallback(() => removeNotification(), []),
  };

  return (
    <NotifContext.Provider value={context}>{children}</NotifContext.Provider>
  );
};

// Context wrapper.
export const useNotification = () => {
  const { notification, addNotification, removeNotification } = useContext(
    NotifContext
  );

  return {
    notification,
    addNotification,
    removeNotification,
  };
};
