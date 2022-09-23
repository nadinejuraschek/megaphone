import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
