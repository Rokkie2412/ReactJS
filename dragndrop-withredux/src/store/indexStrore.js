import { createStore } from "redux";
import { itemDataShift } from "../data";

export const DRAGEND = "DRAGEND";

export const setData = (value) => ({
  type: DRAGEND,
  payload: value,
});

const initialValue = {
  data: itemDataShift,
};

const reducerFn = (state = initialValue, action) => {
  switch (action.type) {
    case DRAGEND:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducerFn);

export default store;
