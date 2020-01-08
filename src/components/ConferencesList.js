
import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { formatDate } from "../util/date-util";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    width: 350,
    height: 340,
    margin: "1rem",
    maxWidth: 350,
    display: "inline-grid",
    textTransform:" uppercase",
    marginBottom:"0px"
  },
  image: {
    margin: "1px",
    display: "block",
    width: 220,
    height: 400,
    maxWidth: "50%",
    maxHeight: "50%"
  },
  date: {
    color: "#3f51b5",
    margin:"1px"
  },
  events:{
    paddingTop:"28px"
  }
}));

export default function ConferencesList(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container component="main">
        <CssBaseline />
        <div className={classes.conferences}>
        {/* <Typography gutterBottom variant="h3" component="h3" >EVENTS</Typography> */}
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          {props.conferences.map(conference => {
            return (
              <div key={conference.id}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <CardMedia
                      component="img"
                      alt={conference.name}
                      height="210"
                      image={conference.logo_url}
                      title={conference.name}
                     
                    />
                    <Typography gutterBottom variant="h5" component="h3" >
                      <Link to={`/conference/${conference.id}`}>{conference.name}</Link>
                    </Typography>
                    <Typography variant="subtitle2" className={classes.date}>
                      {formatDate(conference.start_date)} - {formatDate(conference.end_date)}
                    </Typography>
                  </Paper>
                </Grid>
              </div>
            );
          })}
          
        </Grid>
      </Container>
    </React.Fragment>
  );
}
