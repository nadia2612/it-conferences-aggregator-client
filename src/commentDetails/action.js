import request from "superagent";

import baseUrl from "../util/baseURL";

export const createComment = (jwt, conferenceId, data) => (
  dispatch,
  getState
) => {
  jwt = getState().currentUser.jwt;
  console.log("JWT from actions", jwt);
  return request
    .post(`${baseUrl}/conference/${conferenceId}/comment`, { jwt })
    .send({ jwt, data })
    .catch(console.error);
};
