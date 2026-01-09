import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/firebase";
import { useDispatch } from "react-redux";
import { setUser, setLogin } from "../../store/authSlice";
export function postAtuh() {
const dispatch = useDispatch();

const registerAuth = async (data) =>  {
    try {

        const candidate = await createUserWithEmailAndPassword(auth, data.email, data.password); 
        const user = candidate.user;

        const {uid, email} = user; 
        dispatch(setUser(uid, email));
        dispatch(setLogin());
        
            

    } catch(e) {
        throw new Error(e)
    }
}

const loginAuth = async (data) =>  {
    try {

      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

        const {uid, email} = user; 
        dispatch(setUser({uid, email}));
        dispatch(setLogin());
        
            

    } catch(e) {
        throw new Error(e) // -- я сюди пиридам кастомний хук який буде обробляти помилку і периводити їй в masenge
    }
}
    return {registerAuth, loginAuth}
}