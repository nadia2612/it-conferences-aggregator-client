import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";




export default function FavoriteComponent(props) {
  return (
    <>
      {props.conference.favoriteId ? (
        <FavoriteIcon color="disabled" onClick={props.deleteLike} />
      ) : (
        <FavoriteIcon color="secondary"   onClick={props.addLike} />
      )}
    </>
  );
}

//style={{ color: "green" }}