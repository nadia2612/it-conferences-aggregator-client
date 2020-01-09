import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    justifyContent:"center",

  },
  submit: {
    width:"100%",
    margin: theme.spacing(3, 0, 2),
    textDecoration: "none"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function CommentForm(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
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
              </Grid>
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
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}

