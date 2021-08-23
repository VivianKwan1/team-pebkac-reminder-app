import firebase from 'firebase/app';
import 'firebase/firestore';
import {collatedTaskExixt}from '../helpers';

const firebaseConfig = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messageSenderId: '',
    apiId: '',
})

export { firebaseConfig as firebase}