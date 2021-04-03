import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

// Image.
import Arrow from "../images/arrow.png";

// Styling.
const useStyles = makeStyles((theme) => ({
  container: {
    margin: 20,
  },
  details: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 15,
    float: "left",
    height: 100,
    width: "calc(100% - 100px)",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    transition: "border-radius 0.1s ease",
    transitionDelay: "0.5s",
  },
  detailsActive: {
    borderBottomLeftRadius: 0,
    transitionDelay: "0s",
  },
  dropdownControl: {
    width: 100,
    height: 100,
    float: "right",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 15,
    borderColor: theme.palette.secondary.main,
    border: "2px solid",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    transition: "border-radius 0.1s ease",
    transitionDelay: "0.5s",
  },
  dropdownControlActive: {
    borderBottomRightRadius: 0,
    transitionDelay: "0s",
  },
  content: {
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    transition: "max-height 0.5s ease-out",
    overflow: "hidden",
    maxHeight: 0,
  },
  contentActive: {
    maxHeight: 250,
  },
  contentScroll: {
    maxHeight: "inherit",
    overflowX: "scroll",
  },
  addItem: {
    transform: "rotate(-90deg)",
    marginTop: 10,
    height: 75,
    transition: "transform 0.5s ease",
  },
  addItemActive: {
    transform: "rotate(90deg)",
  },
}));

export const LargeExpansionPanel = ({ title, content }) => {
  const classes = useStyles();
  const [expansion, setExpansion] = useState(false);

  const toggleExpansion = () => {
    setExpansion((prev) => !prev);
  };

  return (
    <>
      <div className={classes.container}>
        <div
          className={`${classes.details} ${
            expansion ? classes.detailsActive : ""
          }`}
        >
          {title}
        </div>
        <div
          className={`${classes.dropdownControl} ${
            expansion ? classes.dropdownControlActive : ""
          }`}
          role="button"
          tabIndex="0"
          onClick={() => toggleExpansion()}
          onKeyPress={() => toggleExpansion()}
        >
          <img
            src={Arrow}
            alt="^"
            className={`${classes.addItem} ${
              expansion ? classes.addItemActive : ""
            }`}
          />
        </div>
        <div
          className={`${classes.content} ${
            expansion ? classes.contentActive : ""
          }`}
        >
          <div className={classes.contentScroll}>{content}</div>
        </div>
      </div>
    </>
  );
};
