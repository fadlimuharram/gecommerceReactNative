import { productConstants } from "../_constants";
import axios from "axios";
const { PRODUCTS_GET, PRODUCTS_GET_ID } = productConstants;

import Config from "react-native-config";

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
    const fullUri = `${Config.API_URL}products?limit=${limit}&page=${page}`;
    const products = await axios.get(fullUri);

    dispatch({ type: PRODUCTS_GET, payload: products.data });
  } catch (e) {
    console.log(e);
  }
};

export const getProductsById = id => async dispatch => {
  try {
    const fullUri = `${Config.API_URL}products/${id}`;
    const product = await axios.get(fullUri);

    dispatch({ type: PRODUCTS_GET_ID, payload: product.data });
  } catch (e) {
    console.log(e);
  }
};

export const getProductsByCategory = (
  categoryId,
  limit,
  page
) => async dispatch => {
  try {
    const fullUri = `${
      Config.API_URL
    }products/category/${categoryId}?limit=${limit}&page=${page}`;
    const products = await axios.get(fullUri);

    dispatch({ type: PRODUCTS_GET, payload: products.data });
  } catch (e) {
    console.log(e);
  }
};

export const getProductsBySearch = (search, limit, page) => async dispatch => {
  try {
    const fullUri = `${
      Config.API_URL
    }products/search?limit=${limit}&page=${page}`;
    const products = await axios.post(fullUri, {
      search
    });

    dispatch({ type: PRODUCTS_GET, payload: products.data });
  } catch (e) {
    console.log(e);
  }
};
