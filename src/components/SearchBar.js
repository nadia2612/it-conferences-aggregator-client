import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";

var items = [
  {
    src:
      "https://www.alltechconferences.com/wp-content/uploads/2019/04/All-Tech-Conferences-New-York-e1554295828626.jpg",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    src:
      "https://www.alltechconferences.com/wp-content/uploads/2019/04/All-Tech-Conferences-Dubai-e1554295788771.jpg",
    description: "Hello World!"
  },
  {
    src:
      "https://www.alltechconferences.com/wp-content/uploads/2019/04/All-Tech-Conferences-Warsaw-e1554295697280.jpg",
    description: "Hello World!"
  },
  {
    src:
      "https://www.alltechconferences.com/wp-content/uploads/2019/04/All-Tech-Conferences-Istanbul-e1554295810110.jpg",
    description: "Hello World!"
  },
  {
    src:
      "https://www.alltechconferences.com/wp-content/uploads/2019/04/All-Tech-Conferences-Singapore-e1554295845451.jpg",
    description: "Hello World!"
  }
];

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
  },
  carusel: {
    margin: "auto",
    display: "flex"
  },
  carouselImage: {
    width: "100%"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  searchBar: {
    position: "absolute",
    minWidth: "100%",
    paddingRight: "200px",
    paddingLeft: "200px"
  }
}));

export default function SearchBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <Carousel
          className={classes.carusel}
          indicators={false}
          animation="slide"
        >
          {items.map(item => {
            return (
              <img
                src={item.src}
                alt={item.description}
                className={classes.carouselImage}
              ></img>
            );
          })}
        </Carousel>
        <Container component="main" maxWidth="md" className={classes.searchBar}>
          <CssBaseline />

          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={props.onSubmit}
          >
            <div>
              <Grid>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "4px" }}
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
      </div>
    </React.Fragment>
  );
}
