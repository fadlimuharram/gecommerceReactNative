import { transactionConstants } from "../_constants";

const { TRANSACTION_POST } = transactionConstants;

const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION_POST:
      return {
        data: action.payload.data
      };
    default:
      return state;
  }
};
