import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCg4mBj06KnCnr1I8qvhI4-BmwJfLItywk",
    authDomain: "goalcoach-77dda.firebaseapp.com",
    databaseURL: "https://goalcoach-77dda.firebaseio.com",
    projectId: "goalcoach-77dda",
    storageBucket: "goalcoach-77dda.appspot.com",
    messagingSenderId: "909110448549"
  };


 export const firebaseApp = firebase.initializeApp(config);