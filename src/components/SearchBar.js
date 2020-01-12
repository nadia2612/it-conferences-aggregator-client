import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "40%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function SearchBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <form className={classes.root} noValidate autoComplete="off" onSubmit={props.onSubmit}>
          <div>
            <Grid>
              <TextField
                variant="outlined"
                fullWidth
                id="search"
                label="Search"
                name="search"
                autoComplete="Search"
                value={props.values.search}
                onChange={props.onChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <SearchIcon color="secondary" />
              </Button>
            </Grid>
          </div>
        </form>
      </Container>
    </React.Fragment>
  );
}
