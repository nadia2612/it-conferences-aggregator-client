import request from "superagent";
import baseUrl from "../util/baseURL";

export const CONFERENCES_FETCHED = "CONFERENCES_FETCHED";

const conferencesFetched = conferences => ({
  type: CONFERENCES_FETCHED,
  payload: conferences
});

export const loadConferences = query => dispatch => {
  request(`${baseUrl}/conference`)
    .query(query)
    .then(response => {
      dispatch(conferencesFetched(response.body));
    })
    .catch(console.error);
};
