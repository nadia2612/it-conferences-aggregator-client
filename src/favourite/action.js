import request from "superagent";
import baseUrl from "../util/baseURL";


export const postLike = (jwt, id) => (dispatch, getState) => {
  jwt = getState().currentUser.jwt;
  console.log("JWT from actions", jwt);
  return request
    .post(`${baseUrl}/conference/${id}/favourite`, { jwt })
    .send({ jwt,id })
    .catch(console.error);
};

export const deleteLike = (jwt, id) => (dispatch, getState) => {
  jwt = getState().currentUser.jwt;
  console.log("JWT from Delete", { jwt });
  return request
    .delete(`${baseUrl}/conference/${id}/favourite`, { jwt })
    .catch(console.error);
};
