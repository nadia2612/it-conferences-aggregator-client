import { LOGGED_IN, LOG_OUT } from "./action";

const initialState = {
  email: "",
  jwt: "",
  id: "",
  name: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      const { email, jwt, id, name } = action.payload;
      return { email, jwt, id, name };
    case LOG_OUT:
      return { email: "", jwt: "", id: "", name: "" };
    default:
      return state;
  }
}
