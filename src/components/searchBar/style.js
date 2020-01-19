import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
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
    paddingRight: "20%",
    paddingLeft: "20%"
  }
}));

