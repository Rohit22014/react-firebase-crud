import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWtLPI0HDlQjGgZt3Y2cjXGDnV-Ki1n7Y",
    authDomain: "react-firebase-crud-cad52.firebaseapp.com",
    projectId: "react-firebase-crud-cad52",
    storageBucket: "react-firebase-crud-cad52.appspot.com",
    messagingSenderId: "1065699089752",
    appId: "1:1065699089752:web:b0f395fd3eed4a2e07592d",
    measurementId: "G-1PCV5SYPY3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);