import { productConstants } from "../_constants";

const { PRODUCTS_GET, PRODUCTS_GET_ID } = productConstants;

export const productGetByCategoryId = categoryId => dispatch => {
  dispatch({
    type: PRODUCTS_GET,
    payload: categoryId
  });
};

export const productFindById = id => dispatch => {
  dispatch({
    type: PRODUCTS_GET_ID,
    payload: id
  });
};
