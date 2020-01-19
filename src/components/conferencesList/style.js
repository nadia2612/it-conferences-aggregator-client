import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    width: 550,
    height: 380,
    margin: "1rem",
    maxWidth: 400,
    display: "inline-grid",
    textTransform: " uppercase",
    marginBottom: "0px"
  },
  image: {
    margin: "1px",
    display: "flex",
    width: 220,
    height: 400,
    maxWidth: "50%",
    maxHeight: "50%"
  },
  date: {
    color: "black",
    margin: "1px"
  },
  events: {
    paddingTop: "28px"
  }
}));
