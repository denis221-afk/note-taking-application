import React from "react";

// hook
import { useSubmit } from "../../hooks/useSubmit";
// images
import GoogleIcon from "../../assets/images/Auth/Google.svg";
const LoginWithGoogle = () => {
  const { onLoginWithGoogle } = useSubmit();
  return (
    <>
      <button
        className="bg-gray-100 w-full flex items-center justify-center py-3 rounded-sm cursor-pointer mt-4"
        onClick={() => onLoginWithGoogle()}
      >
        <img src={GoogleIcon} alt="Google" />
        <span>Google</span>
      </button>
    </>
  );
};

export default LoginWithGoogle;
