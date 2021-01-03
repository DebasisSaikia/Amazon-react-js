import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBc_an1XFydWj2zDHwopKZVDadQnkH080U",
  authDomain: "clone-55de3.firebaseapp.com",
  databaseURL: "https://clone-55de3.firebaseio.com",
  projectId: "clone-55de3",
  storageBucket: "clone-55de3.appspot.com",
  messagingSenderId: "221819403813",
  appId: "1:221819403813:web:a244e77f829d826fd3c9cc",
});

// const db=firebaseApp.firestore()
const auth=firebase.auth()

export {auth};