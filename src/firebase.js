// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBn6Tqbk7WXAgUBSSLUOGYQUqe2gCv2jIY",
  authDomain: "discord-by-nitish.firebaseapp.com",
  databaseURL: "https://discord-by-nitish.firebaseio.com",
  projectId: "discord-by-nitish",
  storageBucket: "discord-by-nitish.appspot.com",
  messagingSenderId: "862226349101",
  appId: "1:862226349101:web:03a5ca6e6cc21fbd964ca4",
  measurementId: "G-CXCK6SEYDK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;