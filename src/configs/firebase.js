import * as firebase from 'firebase/app';
import 'firebase/firestore';


const app  = firebase.initializeApp({
    apiKey: "AIzaSyBRC-b4b6sNS0KL7MLP1bVND4vwjJBjHyg",
    authDomain: "dquintana-9cb4a.firebaseapp.com",
    projectId: "dquintana-9cb4a",
    storageBucket: "dquintana-9cb4a.appspot.com",
    messagingSenderId: "84562710954",
    appId: "1:84562710954:web:e4dff4bacdd0454bac9bd3"
  });

  export function getFirebase(){
      return app;
  }
  export function getFirestore(app){
      return firebase.firestore(app);
  }