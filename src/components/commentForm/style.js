import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  form: {
    dispaly:"flex",
    width: "100%",
    marginTop: theme.spacing(3),
    justifyContent:"center",

  },
  submit: {
    dispaly:"flex",
    maxWidth:"50%",
    width:"100%",
    margin: theme.spacing(3, 0, 2),
    textDecoration: "none"
  },
  textField: {
    marginBottom:"20px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));