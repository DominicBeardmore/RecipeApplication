// Redux boiler plate for maintaining the application state
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from "redux-thunk";
import rootReducer from './reducers/';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(ReduxThunk), ...enhancerList);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

module.exports = {
  initStore
};