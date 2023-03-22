import { combineReducers } from "redux";
import charactersReducer from "./reducers/charactersSlice";
import singleCharacteReducer from "./reducers/singleCharacterSlice";
import locationReducer from "./reducers/locationSlice";
import singleLocationReducer from "./reducers/singleLocationSlice";
import episodesReducer from "./reducers/episodesSlice";

const rootReducer = combineReducers({
  charactersReducer,
  singleCharacteReducer,
  locationReducer,
  singleLocationReducer,
  episodesReducer,
});

export default rootReducer;
