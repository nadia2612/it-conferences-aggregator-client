import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    width: 350,
    height: 340,
    margin: "1rem",
    maxWidth: 350,
    display: "inline-grid",
    textTransform: " uppercase",
    marginBottom: "0px"
  },
  image: {
    margin: "1px",
    display: "block",
    width: 220,
    height: 400,
    maxWidth: "50%",
    maxHeight: "50%"
  },
  date: {
    color: "#3f51b5",
    margin: "1px"
  },
  events: {
    paddingTop: "28px"
  },
  header:{
    margin:"15px"
  }
}));