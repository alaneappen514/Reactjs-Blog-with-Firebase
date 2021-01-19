require("firebase/firestore");
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD2tKvp7typ3XfjsbnMoJeUe96LiQ48ANY",
    authDomain: "react-intro-blog-78dab.firebaseapp.com",
    databaseURL: "https://react-intro-blog-78dab-default-rtdb.firebaseio.com",
    projectId: "react-intro-blog-78dab",
    storageBucket: "react-intro-blog-78dab.appspot.com",
    messagingSenderId: "141275085242",
    appId: "1:141275085242:web:6cbd691dfc10e579b94583"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//access to database
var db = firebase.firestore();

//used for logging in 
export const auth = firebase.auth()
export const firestore = firebase.firestore
export default db;
