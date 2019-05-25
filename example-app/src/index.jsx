import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom'
import Routes from './routes';
import {StoreProvider} from '../../src';
import reducers from './store/reducer';
console.log('React hooks implementation');

render(
  <StoreProvider reducers={reducers}>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </StoreProvider>, document.getElementById('root'));
