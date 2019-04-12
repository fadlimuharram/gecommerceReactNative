import { cartConstants } from "../_constants";

const INITIAL_STATE = {
  data: [],
  total: 0
};

const { CART_POST, CART_DELETE, CART_UPDATE, CART_GET } = cartConstants;

export default (state = INITIAL_STATE, action) => {
  let newState;
  switch (action.type) {
    case CART_GET:
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total
      };
    case CART_POST:
      return { ...state };

    case CART_DELETE:
      newState = state.data.filter((val, i) => {
        return val.id !== action.payload.data.id;
      });
      return { ...state, data: newState, total: action.payload.total };

    case CART_UPDATE:
      newState = state.data.map((val, i) => {
        if (val.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return val;
        }
      });
      return { ...state, data: newState, total: action.payload.total };

    default:
      return { ...state };
  }
};
