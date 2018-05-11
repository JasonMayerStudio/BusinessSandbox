import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import rootReducer from '../reducers';
import { loadState, saveState } from './browserStorage';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
/* eslint-enable no-underscore-dangle */

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default function configureStore(initialState) {
  const savedAuth = loadState('auth');
  const stateToUse = initialState || { auth: savedAuth };

  const store = createStore(rootReducer, stateToUse, enhancer);

  store.subscribe(throttle(() => {
    saveState({
      auth: store.getState().auth,
      orgIds: store.getState().globalFilter.orgIds,
    });
  }), 1000);

  return store;
}
