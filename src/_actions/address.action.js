import { addressConstants } from "../_constants";
import axios from "axios";
import Config from "react-native-config";

const { ADDRESS_GET, ADDRESS_POST } = addressConstants;
const fullUri = `${Config.API_URL}addresses`;
export const getAddress = token => async dispatch => {
  try {
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

export const postAddress = (data, token) => async dispatch => {
  dispatch({
    type: ADDRESS_POST,
    payload: axios.post(fullUri, data, {
      headers: {
        Authorization: token
      }
    })
  });
};
