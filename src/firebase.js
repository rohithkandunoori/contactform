

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig ={
  apiKey: "AIzaSyCaCwqy5XWf1isBIEe3fGteE6kzMxZn0Ps",
  authDomain: "contacts-fe67c.firebaseapp.com",
  projectId: "contacts-fe67c",
  storageBucket: "contacts-fe67c.appspot.com",
  messagingSenderId: "544562918164",
  appId: "1:544562918164:web:673de25011de49ca964801",
  measurementId: "${config.measurementId}",
  databaseURL:"https://contacts-fe67c-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database= getFirestore(app)
// Initialize Firebase
  //firebase.initializeApp(firebaseConfig);


export default database