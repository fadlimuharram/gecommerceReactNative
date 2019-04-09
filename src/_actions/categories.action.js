import { categoriesConstants, apiConstants } from "../_constants";
import axios from "axios";
const { CATEGORIES_GET } = categoriesConstants;
const { uri } = apiConstants;

export const getCategories = (limit, page) => async dispatch => {
  try {
    const fullUri = `${uri}categories?limit=${limit}&page=${page}`;

    const categories = await axios.get(fullUri);

    dispatch({ type: CATEGORIES_GET, payload: categories.data });
  } catch (e) {
    console.log("err", e);
  }
};
