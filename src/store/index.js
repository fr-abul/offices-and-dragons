import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga'
import rootSaga from '../store/saga'

import reducers from '../reducers';
import initialState from './initial-state';


const middleware = [createSagaMiddleWare()];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

middleware[0].run(rootSaga);
export default store;
