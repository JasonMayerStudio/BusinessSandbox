import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './containers/App';
import GAListener from './containers/GAListener';

import './assets/scss/index.scss';

const store = configureStore();

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <GAListener>
          <Route path="/" component={App} />
        </GAListener>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
