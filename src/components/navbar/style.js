import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  homeButton: {
    paddingTop: "1%",
    position: "absolute",
    left: 0,
    top: "3px",
    color: "white"
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  chip:{
      backgroundColor: "white",
      color: "black",
      minWidth: "100px"
  
  }
}));


