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



export default function FavoritesList(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container component="main">
        <CssBaseline />
        <div className={classes.favorites}>
          <Typography className={classes.header} variant="h3">
            My favorites:
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            {props.favorites.map(conference => {
              return (
                <div key={conference.conference.id}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <CardMedia
                        component="img"
                        alt={conference.conference.name}
                        height="250"
                        image={conference.conference.logo_url}
                        title={conference.conference.name}
                      />
                      <Typography gutterBottom variant="h5" component="h3">
                        <Link to={`/conference/${conference.conference.id}`}>
                          {conference.conference.name}
                        </Link>
                      </Typography>
                      <Typography variant="subtitle2" className={classes.date}>
                        {formatDate(conference.conference.start_date)} -{" "}
                        {formatDate(conference.conference.end_date)}
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
