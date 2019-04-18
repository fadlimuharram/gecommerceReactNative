import { userConstants } from "../_constants";

const INITIAL_STATE = {
  user: {},
  access_token: {},
  isLoggedIn: false
};

const {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  CLEAR_USER,
  GET_USER_DATA
} = userConstants;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        isLoggedIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        isLoggedIn: true
      };
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    case CLEAR_USER:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};
