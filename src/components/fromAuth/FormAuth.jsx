//hooks
import { postAtuh } from '../../services/authServeces/postAuth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// images 
import showIcon from '../../assets/images/Auth/Show.svg'
import ErrorMasenge from '../errorMasenge/ErrorMasenge';
import { useLoading } from '../../hooks/useContext';
import Loading from '../loading/Loading';

const FormAuth = ({btnName, type}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'});
    const { registerAuth, loginAuth } = postAtuh();
    const navigate = useNavigate();
    const [viseblePassword, setVisible] = useState(false); 
    const {isLoading, setLoading} = useLoading();

    async function onSubmit(data) {
      setLoading(true); 
      if(type === 'Register') {
       await registerAuth(data); 

      } else if(type === 'Login') {
        await loginAuth(data); 
      }
       navigate("/", {replace: true}); 
       setLoading(false);
    }


    return (
    <>
    {isLoading ? <Loading /> : null}
        <form className='min-w-96 mt-4' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="login" className='flex flex-col'>
                <span>Email Adress</span>
                <input type="text"  placeholder='email@exemple.com' 
                id='email'
                {...register('email', {
                    required: 'Field cannot be empty', 
                    maxLength: 254, 
                    minLength: {
                        value: 6, 
                        message: 'Min Length 6'
                    },
                    pattern: {value: /^\S+@\S+\.\S+$/, message: 'email is not valide'}
                    }
                )
                } className='py-3 px-4 border-gray-200 border-2 rounded-sm' />
                {errors.email && <ErrorMasenge masenge={errors.email.message}/>}
            </label>
            <label htmlFor="password" className='flex flex-col mt-4'>
                <span>Password</span>
            <div className='relative'>
                <input type={viseblePassword ? 'text' : 'password'} 
                id='password'
                {...register('password', {required: 'Field cannot be empty', minLength: {value: 6, message: 'min length 6'}, maxLength: 28})}  
                className='py-3 px-4 border-gray-200 border-2 rounded-sm w-full' 
            />
                <img className='absolute top-1/2 -right-7 -translate-y-1/2 ml-1.5 cursor-pointer' src={showIcon} onClick={() => setVisible(!viseblePassword)}/>
                {errors.password && <ErrorMasenge masenge={errors.password.message} />}
            </div>
            </label>
            <button type="submit" className='bg-blue-500 w-full mt-5 text-white font-bold py-3 cursor-pointer rounded-sm'>{btnName}</button>
        </form>
    </>

    );
};

export default FormAuth;