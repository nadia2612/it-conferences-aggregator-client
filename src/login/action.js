import request from "superagent";
import baseUrl from "../util/baseURL";

export const LOGGED_IN = "LOGGED_IN";
export const LOG_OUT = "LOG_OUT";

function saveJWT(email, jwt, id, name) {
  return {
    type: LOGGED_IN,
    payload: { email, jwt, id, name }
  };
}

export const logOut = () => ({
  type: LOG_OUT
});

export const sendLogin = (email, password, id, name, push) => dispatch => {
  const data = { email, password, id, name };
  return request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(
        saveJWT(email, response.body.jwt, response.body.id, response.body.name)
      );
      if (push) {
        push("/event");
      }
    }).catch(console.error);
    
};

export const signUp = (name, email, password, push) => () => {
  const data = { name, email, password };
  return request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      if (push) {
        push("/login");
      }
    }).catch(console.error);

};
