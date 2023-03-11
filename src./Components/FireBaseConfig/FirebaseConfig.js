// import { initializeApp } from "firebase/app"
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// // use your app config here
// const firebaseConfig = {
//     apiKey: "AIzaSyD7c_WjVAypif7GA5wEv7-C9dwja_krdUE",
//     authDomain: "ig-reels-f2c02.firebaseapp.com",
//     databaseURL: "https://ig-reels-f2c02-default-rtdb.firebaseio.com",
//     projectId: "ig-reels-f2c02",
//     storageBucket: "ig-reels-f2c02.appspot.com",
//     messagingSenderId: "958756455062",
//     appId: "1:958756455062:web:a859732e679bcd26daf8b7",
//     measurementId: "G-JQDVQLBSBJ"
//   };

// const firebaseApp =initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();


// export default db;
// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7c_WjVAypif7GA5wEv7-C9dwja_krdUE",
    authDomain: "ig-reels-f2c02.firebaseapp.com",
    projectId: "ig-reels-f2c02",
    storageBucket: "ig-reels-f2c02.appspot.com",
    messagingSenderId: "958756455062",
    appId: "1:958756455062:web:a859732e679bcd26daf8b7",
    measurementId: "G-JQDVQLBSBJ"
  };

  const firebaseApp=initializeApp(firebaseConfig)
  const db=getFirestore(firebaseApp);
  export default db;