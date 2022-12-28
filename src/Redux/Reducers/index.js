import { combineReducers } from "redux";
import { addToCart } from "./addData";

const reducer = combineReducers({
  carts: addToCart,
});

export const rootReducer = (state, action) => {
  return reducer(state, action);
};
