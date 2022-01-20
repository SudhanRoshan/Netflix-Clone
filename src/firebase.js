import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvoWQTvvyCQIoWtElp_3EalaLPQ77bGcE",
    authDomain: "netflix-clone-project-41be2.firebaseapp.com",
    projectId: "netflix-clone-project-41be2",
    storageBucket: "netflix-clone-project-41be2.appspot.com",
    messagingSenderId: "37148191626",
    appId: "1:37148191626:web:31cbfa318df719ede9b673"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;
