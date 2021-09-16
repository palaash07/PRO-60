 import firebase from "firebase" 
 
 const firebaseConfig = {
  apiKey: "AIzaSyA998XmsNNNa0prXjmzaOMwJRQBtCRnjV0",
  authDomain: "pro---60-da0e1.firebaseapp.com",
  databaseURL: "https://pro---60-da0e1-default-rtdb.firebaseio.com",
  projectId: "pro---60-da0e1",
  storageBucket: "pro---60-da0e1.appspot.com",
  messagingSenderId: "599889986358",
  appId: "1:599889986358:web:076b4c3649f44448962997"
};
   
   firebase.initializeApp(firebaseConfig) 
   
   export default firebase.database()

  