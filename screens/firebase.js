import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBHFl14x421Cht3phohyzYP68_Jrxvd2E4",
    authDomain: "reminderapp-45c3a.firebaseapp.com",
    databaseURL: "https://reminderapp-45c3a-default-rtdb.firebaseio.com",
    projectId: "reminderapp-45c3a",
    storageBucket: "reminderapp-45c3a.appspot.com",
    messagingSenderId: "312108100120",
    appId: "1:312108100120:web:1b272b092f235da0b7f16d",
    measurementId: "G-66QWCLPVRE",
}
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
export {db };
