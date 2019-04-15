import { categoriesConstants } from "../_constants";
import axios from "axios";
const { CATEGORIES_GET } = categoriesConstants;
import Config from "react-native-config";

export const getCategories = (limit, page) => dispatch => {
  try {
    const fullUri = `${Config.API_URL}categories?limit=${limit}&page=${page}`;

    // const categories = await axios.get(fullUri);

    dispatch({ type: CATEGORIES_GET, payload: axios.get(fullUri) });
  } catch (e) {
    console.log("err", e);
  }
};
