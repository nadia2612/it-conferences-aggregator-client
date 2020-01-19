import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Carousel from "react-material-ui-carousel";
import SearchBar from "material-ui-search-bar";
import { useStyles } from './style'

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



export default function SearchBarr(props) {
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
              key={Math.random(Math.floor)*100000000}
                src={item.src}
                alt={item.description}
                className={classes.carouselImage}
              ></img>
            );
          })}
        </Carousel>
        <Container component="main" maxWidth="md" className={classes.searchBar}>
          <CssBaseline />
          <SearchBar
            value={props.values.search}
            onChange={props.onChange}
            onRequestSearch={props.onRequestSearch}
            onCancelSearch={props.onCancelSearch}
          />
        </Container>
      </div>
    </React.Fragment>
  );
}
