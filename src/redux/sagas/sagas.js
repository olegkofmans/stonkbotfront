import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import rootReducer from './reducers'; // Make sure to import your root reducer

// Your root saga (if you are using Redux Saga)
function* rootSaga() {
  yield all([/* Your saga functions here */]);
}

// Create Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers (if you have multiple reducers)
const combinedReducers = combineReducers({
  /* Your individual reducers here */
});

// Create the Redux store
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

// Run the root saga (if you are using Redux Saga)
sagaMiddleware.run(rootSaga);

export default store;
