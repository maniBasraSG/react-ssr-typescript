import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

export default function configureStore() {
  const store = createStore(rootReducer, undefined, composeWithDevTools());

  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    (module as any).hot.accept('./root-reducer', () => store.replaceReducer(rootReducer));
  }

  return store;
}
