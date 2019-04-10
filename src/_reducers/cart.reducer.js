import { cartConstants } from "../_constants";

const INITIAL_STATE = {
  data: []
};

const { CART_POST, CART_DELETE, CART_UPDATE, CART_GET } = cartConstants;

export default (state = INITIAL_STATE, action) => {
  let newState;
  switch (action.type) {
    case CART_GET:
      return { ...state, data: action.payload };
    case CART_POST:
      return { ...state };

    case CART_DELETE:
      newState = state.data.filter((val, i) => {
        return val.id !== action.payload.id;
      });
      return { ...state, data: newState };

    case CART_UPDATE:
      newState = state.data.map((val, i) => {
        if (val.id === action.payload.id) {
          return action.payload;
        } else {
          return val;
        }
      });
      return { ...state, data: newState };

    default:
      return { ...state };
  }
};
