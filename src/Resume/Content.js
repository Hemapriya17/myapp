import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
});

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardMedia alt="BIO" title="BIO" />
      <CardContent>
        <Typography variant="body5" color="Success" component="p">
          Myself Hemapriyadharshini, I'm from pondicherry. <br />
          I have completed my UG in Bachelor of Technology at Achariya College
          of Engineering Technology. <br />
          Currently, I'm working in Learny Technologies.
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" onClick={handleClick} color="secondary">
          Read
        </Button>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Thanks for reading!!!
          </Alert>
        </Snackbar>
      </CardActions>
    </Card>
  );
}
