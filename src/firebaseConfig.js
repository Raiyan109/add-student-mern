import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbsxdmCT2_sGHhFQgthDUuxryoo5-9xYU",
    authDomain: "add-student-mern.firebaseapp.com",
    projectId: "add-student-mern",
    storageBucket: "add-student-mern.appspot.com",
    messagingSenderId: "852379215240",
    appId: "1:852379215240:web:3888cafe9439b93486863d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);