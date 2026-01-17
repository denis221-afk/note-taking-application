// Modules
import React from 'react';
import {Routes, Route} from 'react-router-dom'

// Pages 
import AuthPages from '../../pages/authPages/AuthPages';
import RegisterPage from '../../pages/authPages/RegisterPage';

const RouterLogin = () => {
    return (
        <div className='flex items-center justify-center w-full h-dvh'>
            <Routes>  
                <Route path='/' element={<AuthPages />}/>
                <Route path='/Register' element={<RegisterPage />} />
            </Routes>
        </div>
    );
};

export default RouterLogin;