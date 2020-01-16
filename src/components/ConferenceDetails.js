import React from "react";
import GoogleMaps from "./GoogleMaps";
import { formatDate } from "../util/date-util";
import FavoriteComponent from "./FavoriteComponent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DateRangeIcon from "@material-ui/icons/DateRange";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import LanguageIcon from "@material-ui/icons/Language";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import baseUrl from "../util/baseURL";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "25px",
    marginBottom: "25px",
    paddingBottom: "10px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "40%",
    textDecoration: "none",
    color: "white"
  },
  paper: {
    maxWidth: 900,
    margin: `${theme.spacing(2)}px auto`
  },
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    boxSizing: "inherit",
    marginLeft: "12px",
    flexGrow: 1,
    borderRadius: "4px"
  },
  noPadding: {
    "& :first-child": {
      paddingLeft: "0px",
      paddingRight: "0px"
    }
  },
  paperWrap: {
    borderRadius: "6px"
  },
  topographyHeader: {
    paddingTop: "30px",
    textTransform: " uppercase",
    textDecoration: "underline",
    textDecorationColor: "#656765",
    color: "#286363"
  },
  iconGrid: {
    marginTop: "3px"
  },
  icon: {
    color: "#286363",
    fontSize: "2rem"
  },
  textGrid: {
    textAlign: "left"
  },
  submitAdd: {
    margin: "14px",
    display: "inlineFlex",
    flexGrow: 1,
    borderRadius: "4px",
    widht: "25%",
    maxWight: "25%"
  },
  conteiner: {
    paddingBottom: "20px"
  },
  text: {
    color: "#286363"
  }
}));

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
              <Typography style={{ margin: "25px", textAlign: "left" }}>
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
              <DateRangeIcon style={{ color: "#286363"}} color="secondary" />
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
