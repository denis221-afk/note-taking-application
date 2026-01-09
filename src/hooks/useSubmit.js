// hooks
import { postAtuh } from '../services/authServeces/postAuth';
import { useLoading } from '../hooks/useContext';

export function useSubmit() {
    const { registerAuth, loginAuth } = postAtuh();
    const {setLoading} = useLoading();

    async function onSubmit(data ,type) {
    setLoading(true); 
      if(type === 'Register') {
       await registerAuth(data); 

      } else if(type === 'Login') {
        await loginAuth(data); 
      }
      setLoading(false);
      return {success: true}

    }

    return {onSubmit}
}