import { combineReducers } from "redux";
import charactersReducer from "./reducers/charactersSlice";
// import filteredCharactersReducer from "./reducers/filteredCharactersSlice";
import singleCharacteReducer from "./reducers/singleCharacterSlice";
import locationReducer from "./reducers/locationSlice";
import episodesReducer from "./reducers/episodesSlice";

const rootReducer = combineReducers({
  charactersReducer,
  // filteredCharactersReducer,
  singleCharacteReducer,
  locationReducer,
  episodesReducer,
});

export default rootReducer;
