import { SEND_REQUEST, RECEIVE_RESPONSE, REQUEST_ERROR } from '../actions/actions';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case RECEIVE_RESPONSE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
