import { addressConstants } from "../_constants";

const INITIAL_STATE = {
  data: [],
  detailData: {}
};

const { ADDRESS_GET, ADDRESS_GET_BY_ID } = addressConstants;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDRESS_GET:
      return {
        ...state,
        data: action.payload
      };

    case ADDRESS_GET_BY_ID:
      return {
        ...state,
        detailData: action.payload
      };
    default:
      return state;
  }
};
