import request from "superagent";
import baseUrl from "../util/baseURL";

export const CONFERENCE_FETCHED = "CONFERENCE_FETCHED";

const conferenceFetched = conference => ({
  type: CONFERENCE_FETCHED,
  payload: conference
});

export const loadConference = id => (dispatch, getState) => {
  const { jwt } = getState().currentUser;
  return request(`${baseUrl}/conference/${id}`)
    .query(jwt ? { jwt } : {})
    .then(response => {
      dispatch(conferenceFetched(response.body));
    })
    .catch(console.error);
};
