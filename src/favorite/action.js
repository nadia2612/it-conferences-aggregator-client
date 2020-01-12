import request from "superagent";
import baseUrl from "../util/baseURL";

export const FAVORITES_FETCHED = "FAVORITES_FETCHED";

const favoritesFetched = favorites => ({
  type: FAVORITES_FETCHED,
  payload: favorites
});

export const loadFavorites = () => (dispatch, getState) => {
  const { jwt } = getState().currentUser;
  return request(`${baseUrl}/favorite`)
    .query(jwt ? { jwt } : {})
    .then(response => {
      dispatch(favoritesFetched(response.body));
    })
    .catch(console.error);
};

export const postLike = (jwt, id) => (dispatch, getState) => {
  jwt = getState().currentUser.jwt;
  return request
    .post(`${baseUrl}/conference/${id}/favorite`, { jwt })
    .catch(console.error);
};

export const deleteLike = (jwt, id) => (dispatch, getState) => {
  jwt = getState().currentUser.jwt;
  return request
    .delete(`${baseUrl}/conference/${id}/favorite`, { jwt })
    .catch(console.error);
};
