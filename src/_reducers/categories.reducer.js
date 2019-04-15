import { categoriesConstants } from "../_constants";
const INITIAL_STATE = {
  data: [],
  pages: {}
};
const { CATEGORIES_GET } = categoriesConstants;
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_GET + "_FULFILLED":
      return {
        ...state,
        data: action.payload.data.rows,
        pages: action.payload.data.pages
      };
    default:
      return state;
  }
};
