import {
  Grid,
  Tabs,
  Tab,
  useMediaQuery,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles({
  tabIndicator: {
    right: "initial",
  },
});

// Template code from Material UI. Helper function for tab props.
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const Leaderboard = () => {
  const classes = useStyles();
  const orientTabs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [value, setCurrentTab] = useState(0);

  // Switches tabs.
  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Grid>
        <Tabs
          classes={{ indicator: classes.tabIndicator }}
          value={value}
          onChange={handleTabChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          textColor="secondary"
          orientation={orientTabs ? "vertical" : "horizontal"}
        >
          <Tab
            textColor="secondary"
            label="Your leaderboard"
            {...a11yProps(0)}
          />
          <Tab
            textColor="secondary"
            label="Local leaderboard"
            {...a11yProps(1)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Grid>
    </>
  );
};

// Content container for tabs. Template code from material UI.
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
