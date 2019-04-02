import { productConstants } from "../_constants";

const { PRODUCTS_GET } = productConstants;

export const productGetByCategoryId = categoryId => dispatch => {
  dispatch({
    type: PRODUCTS_GET,
    payload: categoryId
  });
};
