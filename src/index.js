import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {ProductProvider} from './components/context'
import * as firebase from 'firebase'

const config ={
    apiKey: "AIzaSyAvLM6iBhGkz98TQCN5ioBxPJEy-gNA0gQ",
    authDomain: "pc-planet-55aa4.firebaseapp.com",
    databaseURL: "https://pc-planet-55aa4.firebaseio.com/",
  };

  firebase.initializeApp(config);
  // Get a reference to the database service
  const database = firebase.database();


ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
