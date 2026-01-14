import { useDispatch } from "react-redux";
import { setUser, setLogin } from "../store/authSlice";
import { postAtuh } from "../services/authServeces/postAuth";
import { getFirebaseErrorMessage } from "../services/authServeces/getFirebaseErrorMessage";
export function useAuth() {
  const dispatch = useDispatch();

  const registerAuth = async (data) => {
    try {
      const user = await postAtuh.register(data.email, data.password);
      const { uid, email } = user;
      dispatch(setUser({ uid, email }));
      dispatch(setLogin());

      return {
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        masenge: getFirebaseErrorMessage(e.code),
      };
    }
  };

  const loginAuth = async (data) => {
    try {
      const user = await postAtuh.login(data.email, data.password);
      const { uid, email } = user;
      dispatch(setUser({ uid, email }));
      dispatch(setLogin());

      return {
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        masenge: getFirebaseErrorMessage(e.code),
      };
    }
  };

  const loginWithGoogle = async () => {
    try {
      const user = await postAtuh.authWithGoogle();

      const { uid, email } = user;
      dispatch(setUser({ uid, email }));
      dispatch(setLogin());

      return {
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        masenge: getFirebaseErrorMessage(e.code),
      };
    }
  };

  return { registerAuth, loginAuth, loginWithGoogle };
}
