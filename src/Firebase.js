import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-JwgMFIhY0zJh7c5nifTXEAg1Ai-g5TA",
    authDomain: "projetoead-e22d9.firebaseapp.com",
    projectId: "projetoead-e22d9",
    storageBucket: "projetoead-e22d9.appspot.com",
    messagingSenderId: "433908312758",
    appId: "1:433908312758:web:8d4c8cb74f2bc91dd45417"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;