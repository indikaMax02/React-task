import { initializeApp } from "firebase/app";

import {getDatabase} from 'firebase/database';

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyCVlYyt19DkiPz9miqlRdX4Xe8Kgm-tUfw",
        authDomain: "fir-react-ca599.firebaseapp.com",
        databaseURL: "https://fir-react-ca599-default-rtdb.firebaseio.com",
        projectId: "fir-react-ca599",
        storageBucket: "fir-react-ca599.appspot.com",
        messagingSenderId: "583671157892",
        appId: "1:583671157892:web:327af9533e87f7e8c89ed1",
        measurementId: "G-QRNERKD93K"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      return getDatabase(app);
}
export default StartFirebase