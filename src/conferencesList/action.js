import request from "superagent";
import baseUrl from "../util/baseURL"

export const CONFERENCES_FETCHED = "CONFERENCES_FETCHED";

const conferencesFetched = conferences => ({
  type: CONFERENCES_FETCHED,
  payload: conferences
});

export const loadConferences = (offset, limit) => (dispatch, getState) => {
  request(`${baseUrl}/conference?offset=${offset}&limit=${limit}`)
    .then(response => {
      dispatch(conferencesFetched(response.body));
    })
    .catch(console.error);
};

