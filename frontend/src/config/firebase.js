import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2WbvImAySW9FlmZF9V-WD76rVlB6Afz8",
    authDomain: "eventos-ba2e6.firebaseapp.com",
    projectId: "eventos-ba2e6",
    storageBucket: "eventos-ba2e6.appspot.com",
    messagingSenderId: "624467707910",
    appId: "1:624467707910:web:7ceebe3b715a9ab9c71b87"
  };
  
  // Initialize Firebase
  export default Firebase.initializeApp(firebaseConfig);