// hooks
import { useLoading } from '../hooks/useContext';
import { useAuth } from './useAuth';

export function useSubmit() {
    const { registerAuth, loginAuth } = useAuth();
    const {setLoading} = useLoading();

    async function onSubmit(data ,type) {
    setLoading(true); 
    let status
      if(type === 'Register') {
     status =  await registerAuth(data); 

      } else if(type === 'Login') {
      status = await loginAuth(data); 
      }
      setLoading(false);
    
      return {status}

    }

    return {onSubmit}
}