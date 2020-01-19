import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  marker: {
    cursor: "pointer",
    position: "relative",
    bottom: "10px",
    right: "12px"
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));