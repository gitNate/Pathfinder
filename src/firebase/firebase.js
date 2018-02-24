import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyAxa8dN4oc7LmpZuRNzayXB9aPxOgsYQJo",
    authDomain: "pathfindercharacter-2d104.firebaseapp.com",
    databaseURL: "https://pathfindercharacter-2d104.firebaseio.com",
    projectId: "pathfindercharacter-2d104",
    storageBucket: "pathfindercharacter-2d104.appspot.com",
    messagingSenderId: "1012215509633"
};

const devConfig = {
  apiKey: "AIzaSyAxa8dN4oc7LmpZuRNzayXB9aPxOgsYQJo",
    authDomain: "pathfindercharacter-2d104.firebaseapp.com",
    databaseURL: "https://pathfindercharacter-2d104.firebaseio.com",
    projectId: "pathfindercharacter-2d104",
    storageBucket: "pathfindercharacter-2d104.appspot.com",
    messagingSenderId: "1012215509633"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
