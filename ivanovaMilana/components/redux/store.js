import { legacy_createStore, combineReducers } from "redux";
import CountReducer from "./reducers/countReducer";

const rootReducer = combineReducers({
  count: CountReducer,
});

export const store = legacy_createStore(rootReducer);
