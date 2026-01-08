import React from 'react';
import logoImages from '../../assets/images/Auth/logo.webp';

// style 
import './authStyle.css';
// components 
import FormAuth from '../../components/fromAuth/FormAuth';
import LoginWithGoogle from '../../components/loginWithGoogle/LoginWithGoogle';
const AuthPages = () => {
    return (
        <div className='w-3xl h-auto flex justify-center items-center bg-white p-12 flex-col rounded-sm'>
            <header>
                <img src={logoImages} alt="" />
            </header>
            <div className='mt-4'>
                <h1 className='font-bold text-2xl tracking-[-0.03125em] leading-[1.2]'>Welcome to Note</h1>
                <span className='text-gray-500 tracking-[-0.03125em] leading-[1.2]'>Please log in to continue</span>
            </div>
            <FormAuth />
            <div className='w-full h-px bg-gray-200 mt-6'></div>
            <span className='mt-4'>or login with Google</span>
            <LoginWithGoogle />
            <div className='w-full h-px bg-gray-200 mt-6 mb-6'></div>
            <div>No account yet? <span className='cursor-pointer'>Sign Up</span></div>
        </div>
    );
};

export default AuthPages;