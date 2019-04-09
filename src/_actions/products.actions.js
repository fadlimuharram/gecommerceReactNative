import { productConstants, apiConstants } from "../_constants";
import axios from "axios";
const { PRODUCTS_GET, PRODUCTS_GET_ID } = productConstants;
const { uri } = apiConstants;

// export const productGetByCategoryId = categoryId => dispatch => {
//   dispatch({
//     type: PRODUCTS_GET,
//     payload: categoryId
//   });
// };

// export const productFindById = id => dispatch => {
//   dispatch({
//     type: PRODUCTS_GET_ID,
//     payload: id
//   });
// };

export const getProducts = (limit, page) => async dispatch => {
  try {
    const fullUri = `${uri}products?limit=${limit}&page=${page}`;
    const products = await axios.get(fullUri);

    dispatch({ type: PRODUCTS_GET, payload: products.data });
  } catch (e) {
    console.log(e);
  }
};

export const getProductsById = id => async dispatch => {
  try {
    const fullUri = `${uri}products/${id}`;
    const product = await axios.get(fullUri);

    dispatch({ type: PRODUCTS_GET_ID, payload: product.data });
  } catch (e) {
    console.log(e);
  }
};
