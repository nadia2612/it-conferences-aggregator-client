import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from './style';



export default function CommentForm(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={props.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="text"
                  label="Comment"
                  name="text"
                  autoComplete="text"
                  value={props.values.text}
                  onChange={props.onChange}
                />
             
              <Button
                type="submit"
                size="small"
                 fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
               Add comment
              </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}

