import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logoImages from '../../assets/images/Auth/logo.webp';



// style 
import './authStyle.css';
// components 
import FormAuth from '../../components/fromAuth/FormAuth';
import LoginWithGoogle from '../../components/loginWithGoogle/LoginWithGoogle';

const RegisterPage = () => {


    return (
        <>
        <div className='w-3xl h-auto flex justify-center items-center bg-white p-12 flex-col rounded-sm'>
            <header>
                <img src={logoImages} alt="" />
            </header>
            <div className='mt-4 text-center'>
                <h1 className='font-bold text-2xl tracking-[-0.03125em] leading-[1.2]'>Create Your Account</h1>
                <span className='text-gray-500 tracking-[-0.03125em] leading-[1.2]'>Sign up to start organizing your notes and boost your productivity.</span>
            </div>
            <FormAuth btnName='Sing up' type="Register"/>
            <div className='w-full h-px bg-gray-200 mt-6'></div>
            <span className='mt-4'>or login with Google</span>
            <LoginWithGoogle />
            <div className='w-full h-px bg-gray-200 mt-6 mb-6'></div>
            <div>Already have an account? <Link to='/' className='cursor-pointer'>Login</Link></div>
        </div> 
        </>
    );
};

export default RegisterPage;