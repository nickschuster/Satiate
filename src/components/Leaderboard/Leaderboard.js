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

const useStyles = makeStyles((theme) => ({
  tabIndicator: {
    right: "initial",
  },
  profileContainer: {
    overflowY: "auto",
  },
  profile: {
    border: "1px solid black",
    textAlign: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
  },
  profileName: {},
  first: {
    borderColor: theme.palette.first.main,
  },
  second: {
    borderColor: theme.palette.second.main,
  },
  third: {
    borderColor: theme.palette.third.main,
  },
}));

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

  // Test data.
  const leaderboard = [
    {
      image: "test",
      name: "test",
    },
    {
      image: "test",
      name: "test",
    },
    {
      image: "test",
      name: "test",
    },
    {
      image: "test",
      name: "test",
    },
  ];

  // Switches tabs.
  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  // Get the users personal leaderboard.
  const getYourLeaderboard = () => {
    return leaderboard;
  };

  // Get the local leaderboard.
  const getLocalLeaderboard = () => {
    return leaderboard;
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
          <LeaderboardList profileList={getYourLeaderboard()} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LeaderboardList profileList={getLocalLeaderboard()} />
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

// Leaderboard list display.
const LeaderboardList = ({ profileList }) => {
  const classes = useStyles();

  // Set the right border color for 1/2/3 place.
  const getBorderColor = (place) => {
    if (place === 0) return classes.first;
    else if (place === 1) return classes.second;
    else if (place === 2) return classes.thrid;
    else return "";
  };

  return (
    <>
      <div className={classes.profileContainer}>
        {profileList.map((value, key) => (
          <div className={classes.profile}>
            <img className={classes.profileImage} />
            <div className={classes.profileName}>test</div>
          </div>
        ))}
      </div>
    </>
  );
};
