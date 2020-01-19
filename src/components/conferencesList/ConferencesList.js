import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { formatDate } from "../../util/date-util";
import { useStyles } from './style'



export default function ConferencesList(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container component="main">
        <CssBaseline />
        <div className={classes.conferences}>
          <Grid container direction="row" justify="center" alignItems="center">
            {props.conferences.map(conference => {
              return (
                <div key={conference.id}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <CardMedia
                        component="img"
                        alt={conference.name}
                        height="270"
                        image={conference.logo_url}
                        title={conference.name}
                      />
                      <Typography gutterBottom variant="h5" component="h3">
                        <Link
                          style={{ color: "black" }}
                          to={`/conference/${conference.id}`}
                        >
                          <b>{conference.name}</b>
                        </Link>
                      </Typography>
                      <Typography variant="subtitle2" className={classes.date}>
                        {formatDate(conference.start_date)} -{" "}
                        {formatDate(conference.end_date)}
                      </Typography>
                    </Paper>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
