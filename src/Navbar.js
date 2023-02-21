import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { RiComputerFill } from "react-icons/ri";

// import { makeStyles } from '@material-ui/core/styles';
// import { BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';

// const useStyles = makeStyles ({
//   root: {
//     minWidth: 300,
//   },
// });

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
size="large"
edge="start"
color="inherit"
aria-label="menu"
sx={{ mr: 2 }}
>
{/* <MenuIcon /> */}
          {/* </IconButton>
<Typography variant="h6"  sx={{ flexGrow: 1}}>
WEATHER FORCASTING
</Typography> */}

          {/* <BsFillSunFill onClick={handleClick} > </BsFillSunFill> */}

          <Grid container>
            <Grid item xs={3}>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  PROFILE <RiComputerFill />
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={3}>
              <Link to="/weather" style={{ textDecoration: "none" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  WEATHER
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={3}>
              <Link to="/theme" style={{ textDecoration: "none" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  THEME
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={3}>
              <Link to="/todo" style={{ textDecoration: "none" }}>
                <Typography variant="h6" style={{ color: "white" }}>
                  TO-DO LIST
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
