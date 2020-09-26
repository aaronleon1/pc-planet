import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAvLM6iBhGkz98TQCN5ioBxPJEy-gNA0gQ",
  authDomain: "pc-planet-55aa4.firebaseapp.com",
  databaseURL: "https://pc-planet-55aa4.firebaseio.com",
  projectId: "pc-planet-55aa4",
  storageBucket: "pc-planet-55aa4.appspot.com",
  messagingSenderId: "137192609058",
  appId: "1:137192609058:web:b5749193bacf6e1a31c17b"
};

firebase.initializeApp(firebaseConfig);

export default firebase