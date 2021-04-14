import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHPIwtac72vqYwqGv_NrM8BhyXZlU9IMg",
  authDomain: "slack-clone-ff9e8.firebaseapp.com",
  projectId: "slack-clone-ff9e8",
  storageBucket: "slack-clone-ff9e8.appspot.com",
  messagingSenderId: "615337531153",
  appId: "1:615337531153:web:a0d37ecedc9070ae1e5eb0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
