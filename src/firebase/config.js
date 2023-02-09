// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAyTIiu3pKfmwTXFkbNUnCXj5aoZtELzL0',
    authDomain: 'journaly-3a041.firebaseapp.com',
    projectId: 'journaly-3a041',
    storageBucket: 'journaly-3a041.appspot.com',
    messagingSenderId: '420258718359',
    appId: '1:420258718359:web:ac18eba772e0a693807fd2',
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);
