import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    
  apiKey: "AIzaSyDYb-lWN5qRVIbZGTj3zVHMgRmXSYmrDKk",
  authDomain: "facebook-messenger-clone-4ca1c.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-4ca1c.firebaseio.com",
  projectId: "facebook-messenger-clone-4ca1c",
  storageBucket: "facebook-messenger-clone-4ca1c.appspot.com",
  messagingSenderId: "671035671612",
  appId: "1:671035671612:web:442c2e08a8a4cbf1782f39",
  measurementId: "G-TE8GN77DXL"

});

const db = firebaseApp.firestore();

export default db;