//import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB2WbvImAySW9FlmZF9V-WD76rVlB6Afz8",
    authDomain: "eventos-ba2e6.firebaseapp.com",
    databaseURL: "https://eventos-ba2e6-default-rtdb.firebaseio.com",
    projectId: "eventos-ba2e6",
    storageBucket: "eventos-ba2e6.appspot.com",
    messagingSenderId: "624467707910",
    appId: "1:624467707910:web:7ceebe3b715a9ab9c71b87"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);