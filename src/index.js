import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {ProductProvider} from './components/context'

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  
  document.getElementById('root')
);

serviceWorker.unregister();
