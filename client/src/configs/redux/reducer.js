import { ADD_PRODUCTS } from "./consts";

const initialState = {
  products: [],
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
