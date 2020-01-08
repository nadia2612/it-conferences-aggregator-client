import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import conferencesReducer from "./conferencesList/reducer"


export default combineReducers({
  currentUser: loginReducer,
  conferences:conferencesReducer
});
