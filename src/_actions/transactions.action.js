import { transactionConstants } from "../_constants";
import axios from "axios";
import Config from "react-native-config";
const { TRANSACTION_POST } = transactionConstants;

const fullUri = `${Config.API_URL}transactions`;

export const postTransaction = (data, dataProduct, token) => dispatch => {
  // alert(JSON.stringify(data, null, 2));
  axios
    .post(fullUri, data, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      const prom = [];
      dataProduct.forEach(val => {
        prom.push(
          axios.post(fullUri + "/" + response.data.data.id + "/product", val, {
            headers: {
              Authorization: token
            }
          })
        );
      });

      axios
        .all(prom)
        .then(val => {
          // alert(JSON.stringify(val, null, 2));
        })
        .catch(e => {
          console.log(e);
        });

      // dispatch({ type: TRANSACTION_POST, payload: response.data });
    })
    .catch(e => {
      console.log(e);
    });
};
