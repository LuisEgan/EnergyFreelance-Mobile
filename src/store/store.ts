import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';

import epicMiddleware, { rootEpic } from './epics/';
import reducers from './reducers';

let store;

const initStore = (initialState: {}) => {
  const reduxMiddleware = applyMiddleware(epicMiddleware);
  const store = createStore(reducers, initialState, reduxMiddleware);

  epicMiddleware.run(rootEpic);

  return store;
};

export const initializeStore = (preloadedState: {}) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  return _store;
};

export function useStore(initialState: {}) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
