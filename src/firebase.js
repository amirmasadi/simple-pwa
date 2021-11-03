// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKQ04P2V6XTAc8hoUUHcw_HhkXcIJjE2s",
  authDomain: "amirasadi-4c336.firebaseapp.com",
  projectId: "amirasadi-4c336",
  storageBucket: "amirasadi-4c336.appspot.com",
  messagingSenderId: "483785407227",
  appId: "1:483785407227:web:35daf0c15a822f69b70e5e",
  measurementId: "G-FHN076RKD2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider}
export default db;
