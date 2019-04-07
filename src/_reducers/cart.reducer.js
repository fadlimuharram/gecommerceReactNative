import { cartConstants } from "../_constants";

const INITIAL_STATE = {
  data: []
};

const { CART_POST, CART_DELETE, CART_UPDATE } = cartConstants;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_POST:
      let newData = [];
      state.data.forEach((val, index) => {
        newData.push({
          id: val.id,
          name: val.name,
          price: val.price,
          desc: val.desc,
          uri: val.uri,
          category_id: val.category_id,
          category: val.category, // dummy
          quantity: val.quantity ? val.quantity : 1
        });
      });

      newData.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        desc: action.payload.desc,
        uri: action.payload.uri,
        category_id: action.payload.category_id,
        category: action.payload.category, // dummy
        quantity: 1
      });

      return { ...state, data: newData };

    case CART_DELETE:
      let dt = state.data.filter((val, index) => {
        return val.id !== action.payload;
      });
      return { ...state, data: dt };

    case CART_UPDATE:
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};
