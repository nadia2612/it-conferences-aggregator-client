import React from "react";
import GoogleMaps from "./GoogleMaps";
import { formatDate } from "../util/date-util";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EuroIcon from "@material-ui/icons/Euro";
import LanguageIcon from "@material-ui/icons/Language";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "25px",
    marginBottom: "25px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "40%",
    textDecoration: "none",
    color: "white"
  },
  paper: {
    maxWidth: 900,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));

export default function ConferenceDetails(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Paper
            variant="outlined"
            style={{ borderRadius: "6px", padding: "2%" }}
          >
            <Typography
              variant="h2"
              style={{ textTransform: " uppercase" }}
              gutterBottom
            >
              {props.conference.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <DateRangeIcon color="secondary" />
              Start Date:
              {formatDate(props.conference.start_date)} - End Date:
              <DateRangeIcon color="secondary" />
              {formatDate(props.conference.end_date)}
            </Typography>
            <Typography>{props.conference.description}</Typography>
            <EuroIcon color="secondary" />

            <Typography>Price:{props.conference.price}</Typography>
            <Typography>
              <img
                src={props.conference.logo_url}
                alt={props.conference.name}
              />
            </Typography>
            <LanguageIcon color="secondary" />
            

            <Typography><a href={`${props.conference.link}`}>{props.conference.link}</a></Typography>
            <LocationOnIcon color="secondary" />

            <Typography>
              {props.conference.location.city},
              {props.conference.location.country}
            </Typography>
          </Paper>
        </div>
        {props.conference.comments.map(comment => {
          return (
            <div key={comment.id}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar className={classes.large}>
                      {comment.user.name}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                      {comment.text}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
        })}
          <GoogleMaps
            center={props.conference.location}
            zoom={5}
            conferences={[props.conference]}
          />
      </Container>
    </React.Fragment>
  );
}
