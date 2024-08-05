import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes';

const initialState = {
  token: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isLoading: false };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;
