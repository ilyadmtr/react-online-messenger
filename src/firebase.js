// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: 'AIzaSyDc2QoRWy0EAoIeOYMEd0r2moitziW3lRU',
//     authDomain: process.env.REACT_APP_Auth_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId:process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyDc2QoRWy0EAoIeOYMEd0r2moitziW3lRU",
    authDomain: "react-messenger-5d630.firebaseapp.com",
    projectId: "react-messenger-5d630",
    storageBucket: "react-messenger-5d630.appspot.com",
    messagingSenderId: "347638201278",
    appId: "1:347638201278:web:ad8f472e88e5b3afa1d7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);