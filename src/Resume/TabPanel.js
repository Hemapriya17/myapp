import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tables from "./Tables";
import Edu from "./Edu";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 310,
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Education" {...a11yProps(0)} />
        <Tab label="Experience" {...a11yProps(2)} />
        <Tab label="Certificate" {...a11yProps(1)} />
        <Tab label="Activity" {...a11yProps(2)} />
        <Tab label="About" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Edu />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Tables />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography variant="body2" color="Secondary" component="p">
          XBILLION SKILLS LAB: <br />
        </Typography>
        10 Workplace intelligence <br />
        <br />
        <Typography variant="body2" color="Secondary" component="p">
          MAHINDRA PRIDE CLASSROOM: <br />
        </Typography>
        Full stack development MEAN stack
      </TabPanel>

      <TabPanel value={value} index={3}>
        NSS volunteer
      </TabPanel>

      <TabPanel value={value} index={4}>
        <Typography variant="body5" color="Success" component="p">
          I have completed my UG in Bachelor of Technology at Achariya College
          of Engineering Technology.
          <br />
          Currently, I'm working in Learny Technologies.
        </Typography>
      </TabPanel>
    </div>
  );
}
