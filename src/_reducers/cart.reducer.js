import { cartConstants } from "../_constants";

const INITIAL_STATE = {
  data: [],
  total: 0
};

const { CART_POST, CART_DELETE, CART_ADD_QUANTITY } = cartConstants;

/**
 * temp
 */
const generateTotal = data => {
  let total = 0;
  data.forEach((val, index) => {
    total += Number(val.price);
  });
  return total;
};
/**
 * end
 */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_POST:
      // const newData = state.data.for
      // newData.push(action.payload);

      let newData = [];
      state.data.forEach((val, index) => {
        newData.push({
          id: val.id,
          name: val.name,
          price: val.price,
          desc: val.desc,
          uri: val.uri,
          category_id: val.category_id,
          quantity: 1
        });
      });

      newData.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        desc: action.payload.desc,
        uri: action.payload.uri,
        category_id: action.payload.category_id,
        quantity: 1
      });

      let total = generateTotal(newData);

      return { ...state, data: newData, total: total };

    case CART_DELETE:
      let dt = state.data.filter((val, index) => {
        return val.id !== action.payload;
      });
      let ttl = generateTotal(dt);
      return { ...state, data: newData, total: ttl };

    case CART_ADD_QUANTITY:
      let findIndexData = state.data.findIndex((val, index) => {
        return val.id === action.payload;
      });
      let newData2 = {};
      if (findIndexData != -1) {
        newData2 = {
          ...state
        };
        newData2.data[findIndexData].quantity =
          newData2.data[findIndexData].quantity + 1;

        return { ...state, ...newData2 };
      }

    default:
      return { ...state };
  }
};
