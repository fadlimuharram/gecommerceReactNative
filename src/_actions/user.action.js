import { userConstants } from "../_constants";
import Config from "react-native-config";
import axios from "axios";
import { _storeData } from "../_services/asyncStorage";
const {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  CLEAR_USER,
  GET_USER_DATA
} = userConstants;

export const login = (email, password) => dispatch => {
  const fullUri = `${Config.API_URL}users/login`;

  axios
    .post(fullUri, { email, password })
    .then(response => {
      _storeData("access_token", JSON.stringify(response.data.access_token));
      _storeData("user", JSON.stringify(response.data.user));
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
    .catch(err => console.log(err));
};

export const register = (
  username,
  email,
  password,
  confirm_password
) => dispatch => {
  const fullUri = `${Config.API_URL}users/register`;

  axios
    .post(fullUri, { username, password, email, confirm_password })
    .then(response => {
      _storeData("access_token", JSON.stringify(response.data.access_token));
      _storeData("user", JSON.stringify(response.data.user));
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getUser = token => async dispatch => {
  try {
    const fullUri = `${Config.API_URL}users/data`;
    const response = await axios.get(fullUri, {
      headers: {
        Authorization: token
      }
    });
    _storeData("user", JSON.stringify(response.data.user));
    dispatch({ type: GET_USER_DATA, payload: response.data.user });
  } catch (e) {
    console.log("qq-->", e);
  }
};

/**
 * untuk async storage
 * @param {*} user
 * @param {*} access_token
 */
export const retrieveUser = (user, access_token) => dispatch => {
  const data = {
    user,
    access_token
  };
  dispatch({ type: LOGIN_SUCCESS, payload: data });
};

export const clearUser = () => dispatch => {
  dispatch({ type: CLEAR_USER });
};
