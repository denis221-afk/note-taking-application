import React from 'react';


// images 
import showIcon from '../../assets/images/Auth/Show.svg'
const FormAuth = () => {
    return (
        <form className='min-w-96 mt-4'>
            <label htmlFor="login" className='flex flex-col'>
                <span>Email Adress</span>
                <input type="text"  placeholder='email@exemple.com' className='py-3 px-4 border-gray-200 border-2 rounded-sm'/>
            </label>
            <label htmlFor="login" className='flex flex-col mt-4'>
                <span>Password</span>
            <div className='relative'>
                <input type="password" className='py-3 px-4 border-gray-200 border-2 rounded-sm w-full'/>
                <img className='absolute top-1/2 -right-7 -translate-y-1/2 ml-1.5 cursor-pointer' src={showIcon} />
            </div>
            </label>
            <button type="submit" className='bg-blue-500 w-full mt-5 text-white font-bold py-3 cursor-pointer rounded-sm'>Login</button>
        </form>
        
    );
};

export default FormAuth;