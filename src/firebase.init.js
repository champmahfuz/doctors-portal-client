// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

    // apiKey: "AIzaSyDHHdoY8w3usFeJLfP2mYfuIFv3fWh24qI",
    // authDomain: "doctors-portal-32e63.firebaseapp.com",
    // projectId: "doctors-portal-32e63",
    // storageBucket: "doctors-portal-32e63.appspot.com",
    // messagingSenderId: "813723458027",
    // appId: "1:813723458027:web:7fd2ecad531e17bed5e1ae"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;