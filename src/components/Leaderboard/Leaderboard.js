import {
  Grid,
  Tabs,
  Tab,
  useMediaQuery,
  Box,
  Typography,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Leaderboard = () => {
  const theme = useTheme();
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
          value={value}
          onChange={handleTabChange}
          aria-label="simple tabs example"
          variant="fullWidth"
          textColor="secondary"
          orientation={orientTabs ? "vertical" : "horizontal"}
        >
          <Tab textColor="secondary" label="Item One" {...a11yProps(0)} />
          <Tab textColor="secondary" label="Item Two" {...a11yProps(1)} />
          <Tab textColor="secondary" label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Grid>
    </>
  );
};

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
