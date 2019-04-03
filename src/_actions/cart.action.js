import { cartConstants } from "../_constants";

const { CART_POST, CART_DELETE, CART_ADD_QUANTITY } = cartConstants;

export const postCart = cart => dispatch => {
  dispatch({ type: CART_POST, payload: cart });
};

export const deleteCart = cartId => dispatch => {
  dispatch({ type: CART_DELETE, payload: cartId });
};

export const addQuantity = cartId => dispatch => {
  dispatch({ type: CART_ADD_QUANTITY, payload: cartId });
};
