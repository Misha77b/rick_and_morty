import { combineReducers } from "redux";
import charactersReducer from "./reducers/charactersSlice";
import locationReducer from "./reducers/locationSlice";
import episodesReducer from "./reducers/episodesSlice";

const rootReducer = combineReducers({
  charactersReducer,
  locationReducer,
  episodesReducer,
});

export default rootReducer;
