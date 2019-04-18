import { addressConstants } from "../_constants";
import axios from "axios";
import Config from "react-native-config";

const { ADDRESS_GET, ADDRESS_POST, ADDRESS_GET_BY_ID } = addressConstants;
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

export const getAddressById = (id, token) => async dispatch => {
  try {
    const response = await axios.get(fullUri + "/" + id, {
      headers: {
        Authorization: token
      }
    });

    dispatch({ type: ADDRESS_GET_BY_ID, payload: response.data.data });
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
