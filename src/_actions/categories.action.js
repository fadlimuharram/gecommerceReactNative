import { categoriesConstants } from "../_constants";

const { CATEGORIES_GET } = categoriesConstants;

export const getCategories = () => dispatch => {
  dispatch({ type: CATEGORIES_GET });
};
