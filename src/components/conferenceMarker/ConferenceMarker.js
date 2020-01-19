import React from "react";
import Popover from "@material-ui/core/Popover";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { formatDate } from "../../util/date-util";
import { useStyles } from './style'



export default function ConferenceMarker(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "conference-popover" : undefined;

  const openPopover = event => {
    setAnchorEl(event.currentTarget.parentElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.conference.logo_url}
              title={props.conference.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.conference.name}
              </Typography>
              <Typography gutterBottom variant="subtitle2">
                {formatDate(props.conference.start_date)} - {formatDate(props.conference.end_date)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p"  noWrap>
                {props.conference.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              to={`/conference/${props.conference.id}`}
              size="small"
              color="primary"
            >
              Learn More
            </Link>
          </CardActions>
        </Card>
      </Popover>
      <LocationOnIcon
        onClick={openPopover}
        color="secondary"
        className={classes.marker}
      />
    </>
  );
}
