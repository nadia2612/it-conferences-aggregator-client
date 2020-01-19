import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: "25px",
    marginBottom: "25px",
    paddingBottom: "10px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "40%",
    textDecoration: "none",
    color: "white"
  },
  paper: {
    maxWidth: 900,
    margin: `${theme.spacing(2)}px auto`
  },
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    boxSizing: "inherit",
    marginLeft: "12px",
    flexGrow: 1,
    borderRadius: "4px"
  },
  noPadding: {
    "& :first-child": {
      paddingLeft: "0px",
      paddingRight: "0px"
    }
  },
  paperWrap: {
    borderRadius: "6px"
  },
  topographyHeader: {
    paddingTop: "30px",
    textTransform: " uppercase",
    textDecoration: "underline",
    textDecorationColor: "#656765",
    color: "#286363"
  },
  iconGrid: {
    marginTop: "3px"
  },
  icon: {
    color: "#286363",
    fontSize: "2rem"
  },
  textGrid: {
    textAlign: "left"
  },
  submitAdd: {
    margin: "14px",
    display: "inlineFlex",
    flexGrow: 1,
    borderRadius: "4px",
    widht: "25%",
    maxWight: "25%"
  },
  conteiner: {
    paddingBottom: "20px"
  },
  text: {
    color: "#286363"
  },
  dateIcon: {
    color: "#286363"
  },
  description: {
    margin: "25px",
    textAlign: "left"
  }
}));
