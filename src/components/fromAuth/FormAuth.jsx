//hooks
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMasenge from "../errorMasenge/ErrorMasenge";
import { useLoading } from "../../hooks/useContext";
import Loading from "../loading/Loading";
import { useSubmit } from "../../hooks/useSubmit";
// images
import showIcon from "../../assets/images/Auth/Show.svg";

const FormAuth = ({ btnName, type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const [viseblePassword, setVisible] = useState(false);
  const { isLoading } = useLoading();
  const { onSubmit } = useSubmit();
  const [Error, setError] = useState("");

  async function handSumit(data) {
    const { status } = await onSubmit(data, type);
    if (status.success) {
      navigate("/", { replace: true });
    } else {
      setError(status.masenge);
    }
  }

  return (
    <>
      <form
        className="min-w-96 relative mt-4"
        onSubmit={handleSubmit(handSumit)}
      >
        {isLoading ? <Loading /> : null}
        <label htmlFor="login" className="flex flex-col">
          <span>Email Adress</span>
          <input
            type="text"
            placeholder="email@exemple.com"
            id="email"
            {...register("email", {
              required: "Field cannot be empty",
              maxLength: 254,
              minLength: {
                value: 6,
                message: "Min Length 6",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "email is not valide",
              },
            })}
            className="py-3 px-4 border-gray-200 border-2 rounded-sm"
          />
          {errors.email && <ErrorMasenge masenge={errors.email.message} />}
        </label>
        <label htmlFor="password" className="flex flex-col mt-4">
          <span>Password</span>
          <div className="relative">
            <input
              type={viseblePassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: "Field cannot be empty",
                minLength: { value: 6, message: "min length 6" },
                maxLength: 28,
              })}
              className="py-3 px-4 border-gray-200 border-2 rounded-sm w-full"
              placeholder="Password"
            />
            <img
              className="absolute top-1/2 -right-7 -translate-y-1/2 ml-1.5 cursor-pointer"
              src={showIcon}
              onClick={() => setVisible(!viseblePassword)}
            />
            {errors.password && (
              <ErrorMasenge masenge={errors.password.message} />
            )}
          </div>
        </label>
        <button
          type="submit"
          className="bg-blue-500 w-full mt-5 text-white font-bold py-3 cursor-pointer rounded-sm"
        >
          {btnName}
        </button>
        {Error ? <ErrorMasenge masenge={Error} /> : null}
      </form>
    </>
  );
};

export default FormAuth;
