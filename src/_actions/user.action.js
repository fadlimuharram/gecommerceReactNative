import { userConstants } from "../_constants";
import Config from "react-native-config";
import axios from "axios";
const { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS } = userConstants;

export const login = (email, password) => dispatch => {
  const fullUri = `${Config.API_URL}users/login`;
  // alert(email + password);
  // try {
  //   const dataLogin = await axios.post(fullUri, {
  //     email,
  //     password
  //   });

  //   alert(JSON.stringify(dataLogin.data));
  // } catch (e) {
  //   alert(JSON.stringify(e));
  //   console.log(e.getMessages());
  // }
  axios
    .post(fullUri, { email, password })
    .then(response => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
    .catch(err => console.log(err));
};
