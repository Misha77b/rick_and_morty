import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const reduxDevToolsCompose = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];

const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
