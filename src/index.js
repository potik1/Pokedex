import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import promise from 'redux-promise';

import Main from '../src/components/Main';
import reducers from '../src/reducers/index';

const store=  createStore(
    reducers,
    compose(
      applyMiddleware(promise),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('root'));
