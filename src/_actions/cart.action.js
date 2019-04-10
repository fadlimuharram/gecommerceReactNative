import { cartConstants } from "../_constants";
import axios from "axios";
import Config from "react-native-config";
const { CART_POST, CART_DELETE, CART_UPDATE, CART_GET } = cartConstants;

const fullUri = `${Config.API_URL}carts`;

export const postCart = (product_id, quantity, token) => async dispatch => {
  axios
    .post(
      fullUri,
      { product_id, quantity },
      {
        headers: {
          Authorization: token
        }
      }
    )
    .then(response => {
      // alert(JSON.stringify(response.data));
      dispatch({ type: CART_POST, payload: response.data });
    })
    .catch(err => console.log(err));
};

export const getCart = token => async dispatch => {
  const response = await axios.get(fullUri, {
    headers: {
      Authorization: token
    }
  });

  dispatch({ type: CART_GET, payload: response.data.data });
};

export const deleteCart = (id, token) => async dispatch => {
  const uriReq = `${fullUri}/${id}`;
  const response = await axios.delete(uriReq, {
    headers: {
      Authorization: token
    }
  });
  dispatch({ type: CART_DELETE, payload: response.data.data });
};

export const updatCart = (id, quantity, token) => async dispatch => {
  const uriReq = `${fullUri}/${id}`;
  const response = await axios.patch(
    uriReq,
    { quantity },
    {
      headers: {
        Authorization: token
      }
    }
  );
  dispatch({ type: CART_UPDATE, payload: response.data.data });
};
