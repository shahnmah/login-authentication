import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)
const handleGoogleProvider =() =>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
}

export default handleGoogleProvider;