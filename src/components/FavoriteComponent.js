import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";




export default function FavoriteComponent(props) {
  return (
    <>
      {props.conference.favoriteId ? (
        <FavoriteIcon color="secondary"  onClick={props.deleteLike} />
      ) : (
        <FavoriteIcon color="disabled"  onClick={props.addLike} />
      )}
    </>
  );
}
