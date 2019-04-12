import { addressConstants } from "../_constants";
import axios from "axios";
import Config from "react-native-config";

const { ADDRESS_GET } = addressConstants;

export const getAddress = token => async dispatch => {
  try {
    const fullUri = `${Config.API_URL}addresses`;
    const response = await axios.get(fullUri, {
      headers: {
        Authorization: token
      }
    });

    dispatch({ type: ADDRESS_GET, payload: response.data.data });
  } catch (e) {
    console.log(e);
  }
};
