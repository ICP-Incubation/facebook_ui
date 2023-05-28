"use client";
import { useState } from "react";
import SignUp from "./SignUp";
import { signIn } from "next-auth/react";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen w-980 mx-auto">
        <div className="relative">
          <h2 className="text-6xl text-blue-500 font-bold">facebook</h2>
          <h4 className="w-3/5 text-2xl text-black font-medium mb-32">
            Connect with friends and the world around you on Facebook.
          </h4>
        </div>
        <div className="bg-white p-7 shadow-lg rounded-lg w-419 h-auto">
          <form className="flex flex-col items-center">
            <input
              type="email"
              name="login"
              id="login"
              placeholder="Email or phone number"
              className="m-3 w-full p-4 border border-gray-300 text-black rounded-md focus:outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="m-3 w-full p-4 border border-gray-300 text-black rounded-md focus:outline-none"
            />
            <button
              type="button"
              onClick={() => signIn("google")}
              className="bg-blue-500 text-white text-lg font-bold tracking-wide p-3 rounded-md cursor-pointer w-full"
            >
              Log In
            </button>
            <p className="text-blue-500 text-sm mt-2 cursor-pointer mb-5 hover:underline">
              Forget password?
            </p>
            <hr className="h-px bg-gray-300 w-full my-4" />
            <button
              onClick={handleSignUpClick}
              className="bg-green-500 border-none text-white text-lg font-bold w-70 mx-auto py-3 rounded-md cursor-pointer w-full"
            >
              Create new Account
            </button>
            {showSignUp && <SignUp onClose={handleCloseSignUp} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
