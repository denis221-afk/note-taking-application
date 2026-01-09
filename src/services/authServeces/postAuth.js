import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/firebase";


export const postAtuh = {
    register:  (email, password) => 
         createUserWithEmailAndPassword(auth, email, password), 
    login: (email, password) => 
        signInWithEmailAndPassword(auth, email,password)
}