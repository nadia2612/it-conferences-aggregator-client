import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import conferencesReducer from "./conferencesList/reducer";
import conferenceReducer from "./conferenceDetails/reducer"


export default combineReducers({
  currentUser: loginReducer,
  conferences:conferencesReducer,
  conference: conferenceReducer
});
