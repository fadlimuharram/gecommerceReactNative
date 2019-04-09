import { categoriesConstants } from "../_constants";
const INITIAL_STATE = {
  data: [],
  pages: {}
};
const { CATEGORIES_GET } = categoriesConstants;
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_GET:
      return {
        ...state,
        data: action.payload.rows,
        pages: action.payload.pages
      };
    default:
      return state;
  }
};
