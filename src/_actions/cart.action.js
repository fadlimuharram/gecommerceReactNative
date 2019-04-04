import { cartConstants } from "../_constants";

const { CART_POST, CART_DELETE, CART_UPDATE } = cartConstants;

export const postCart = cart => dispatch => {
  dispatch({ type: CART_POST, payload: cart });
};

export const deleteCart = cartId => dispatch => {
  dispatch({ type: CART_DELETE, payload: cartId });
};

export const updatCart = cartObject => dispatch => {
  dispatch({ type: CART_UPDATE, payload: cartObject });
};
