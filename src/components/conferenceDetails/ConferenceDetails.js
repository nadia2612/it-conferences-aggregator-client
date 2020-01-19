import React from "react";
import GoogleMaps from "../maps/GoogleMaps";
import { formatDate } from "../../util/date-util";
import FavoriteComponent from "./FavoriteComponent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import LanguageIcon from "@material-ui/icons/Language";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import baseUrl from "../../util/baseURL";
import Button from "@material-ui/core/Button";
import { useStyles } from './style'


export default function ConferenceDetails(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.conteiner} maxWidth="md">
        <div className={classes.root}>
          <Paper className={classes.paperWrap} variant="outlined">
            <Typography
              className={classes.topographyHeader}
              variant="h2"
              gutterBottom
            >
              <b>{props.conference.name}</b>{" "}
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>
                  <img
                    className={classes.image}
                    src={props.conference.logo_url}
                    alt={props.conference.name}
                  />
                </Typography>
              </Grid>

              <Grid container item xs={6}>
                <Grid container item xs={6}>
                  <Grid item xs={2} className={classes.iconGrid}>
                    <DateRangeIcon className={classes.icon} color="secondary" />
                  </Grid>
                  <Grid item xs={10} className={classes.textGrid}>
                    <b className={classes.text}>Start Date:</b>
                    <br />
                    {formatDate(props.conference.start_date)}
                  </Grid>
                </Grid>

                <Grid container item xs={6}>
                  <Grid item xs={2} className={classes.iconGrid}>
                    <DateRangeIcon className={classes.icon} color="secondary" />
                  </Grid>
                  <Grid item xs={10} className={classes.textGrid}>
                    <b className={classes.text}>End Date:</b>
                    <br />
                    {formatDate(props.conference.end_date)}
                  </Grid>
                </Grid>

                <Grid container item xs={6}>
                  <Grid item xs={2} className={classes.iconGrid}>
                    <LocalAtmIcon className={classes.icon} color="secondary" />
                  </Grid>
                  <Grid item xs={10} className={classes.textGrid}>
                    <b className={classes.text}>Price:</b>
                    <br />
                    {props.conference.price}
                  </Grid>
                </Grid>

                <Grid container item xs={6}>
                  <Grid item xs={2} className={classes.iconGrid}>
                    <LanguageIcon className={classes.icon} color="secondary" />
                  </Grid>
                  <Grid item xs={10} className={classes.textGrid}>
                    <b className={classes.text}>Location:</b>
                    <br />
                    {props.conference.location.city},{" "}
                    {props.conference.location.country}
                  </Grid>
                </Grid>
                <Grid container item xs={6}>
                  <Grid item xs={2} className={classes.iconGrid}>
                    <LocationOnIcon
                      className={classes.icon}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={10} className={classes.textGrid}>
                    <b className={classes.text}>Website:</b>
                    <br />
                    <a href={`${props.conference.link}`}>
                      {props.conference.link}
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Typography className={classes.description} >
                <b className={classes.text}>Description:</b>
                <br />
                <br />
                {props.conference.description}
              </Typography>
            </Grid>
            <Button
              href={`${baseUrl}/conference/${props.conference.id}/ics`}
              variant="contained"
              color="primary"
              className={classes.submitAdd}
            >
              <DateRangeIcon className={classes.dateIcon}/>
              Add to my calendar
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitAdd}
            >
              <FavoriteComponent
                addLike={props.addLike}
                user={props.user}
                deleteLike={props.deleteLike}
                conference={props.conference}
              />
              Add to favorites
            </Button>
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
        <Paper variant="outlined" className={classes.noPadding}>
          <GoogleMaps
            style={props.style}
            center={props.conference.location}
            zoom={5}
            conferences={[props.conference]}
          />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
