import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCM3WbX2JLNwbj-PQm68Q735YV9DOlRMDs",
    authDomain: "react-project-book-store-17480.firebaseapp.com",
    projectId: "react-project-book-store-17480",
    storageBucket: "react-project-book-store-17480.appspot.com",
    messagingSenderId: "273831493249",
    appId: "1:273831493249:web:661e3ba10ebf5c06805780"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)