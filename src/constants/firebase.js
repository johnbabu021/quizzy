import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'
export    const firebaseConfig = {
    apiKey: "AIzaSyAFGds9k0jLfvkIoatPZWDYvgM3iJHwMk0",
    authDomain: "quizzy-22e33.firebaseapp.com",
    projectId: "quizzy-22e33",
    storageBucket: "quizzy-22e33.appspot.com",
    messagingSenderId: "215023628833",
    appId: "1:215023628833:web:77503b97e1172eac302960",
    measurementId: "G-9MNE58CTR7"
  };
  export  const firebaseApp=initializeApp(firebaseConfig)

  export  const   db=getFirestore()

