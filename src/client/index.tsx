import { loadableReady } from '@loadable/component';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App/App';
import store from './store/store';

const renderApp = () => {
  const rootContent = document.getElementById('root');
  const renderMethod = (module as any).hot ? render : hydrate;

  renderMethod(
    <Provider store={store()}>
      <App />
    </Provider>,

    rootContent,
  );
};

loadableReady(() => {
  renderApp();
});

if ((module as any).hot) {
  (module as any).hot.accept();
}
