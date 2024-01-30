import { ADD_PRODUCTS } from "./consts";

const addProducts = (payload) => ({
  type: ADD_PRODUCTS,
  payload,
});

export { addProducts };
