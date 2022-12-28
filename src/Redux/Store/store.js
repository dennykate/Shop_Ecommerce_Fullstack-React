import { createStore } from "redux";
import { rootReducer } from "../Reducers";

export const configureStore = (inititalState) => {
  return createStore(rootReducer, inititalState);
};
