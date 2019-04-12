import { addressConstants } from "../_constants";

const INITIAL_STATE = {
  data: []
};

const { ADDRESS_GET } = addressConstants;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_GET:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
