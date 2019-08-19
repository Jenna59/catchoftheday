import Rebase from 're-base'; // allows us to mirror our state to our Firebase changes
import firebase from 'firebase';

// configure Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDHzD3zaPWM6mjLZH3RNdJjCw8Ej5qiN1A',
  authDomain: 'catchofthedayjenna.firebaseapp.com',
  databaseURL: 'https://catchofthedayjenna.firebaseio.com',
});

// create our rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;
