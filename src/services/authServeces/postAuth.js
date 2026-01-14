import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../database/firebase";

const provider = new GoogleAuthProvider();
export const postAtuh = {
  register: (email, password) =>
    createUserWithEmailAndPassword(auth, email, password),
  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
  authWithGoogle: () => signInWithPopup(auth, provider),
};
