export const SEND_REQUEST = 'SEND_REQUEST';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const sendRequest = () => ({
    type: SEND_REQUEST,
  });
  
  export const receiveResponse = (data) => ({
    type: RECEIVE_RESPONSE,
    payload: data,
  });
  
  export const requestError = (error) => ({
    type: REQUEST_ERROR,
    payload: error,
  });