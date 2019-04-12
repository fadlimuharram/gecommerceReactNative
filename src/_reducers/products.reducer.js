import { productConstants } from "../_constants";

const INITIAL_STATE = {
  data: [],
  pages: {},
  detail: {}
};

const { PRODUCTS_GET, PRODUCTS_GET_ID } = productConstants;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_GET:
      return {
        ...state,
        ...INITIAL_STATE,
        data: action.payload.rows,
        pages: action.payload.pages
      };

    case PRODUCTS_GET_ID:
      return { ...state, detail: action.payload.rows };
    default:
      return state;
  }
};
