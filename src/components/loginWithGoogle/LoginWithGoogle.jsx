import React from 'react';


// images
import GoogleIcon from '../../assets/images/Auth/Google.svg';
const LoginWithGoogle = () => {
    return (
        <>
           <button className='bg-gray-100 w-full flex items-center justify-center py-3 rounded-sm cursor-pointer mt-4'>
                <img src={GoogleIcon} alt="Google" />
                <span>Google</span>
            </button> 
        </>
    );
};

export default LoginWithGoogle;