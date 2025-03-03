import React, { useState } from "react";
import MyIcon from "../../assets/icon1.svg";
import GoogleIcon from "../../assets/google1.svg";
import FacebookIcon from "../../assets/fb.svg";
import { Link } from "react-router-dom";


const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full mx-auto p-12 bg-gray">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src={MyIcon} alt="icon" className="w-6 h-6" />
            <span className="text-xl font-semibold">Logo here</span>
          </div>
          <div className="flex flex-row gap-2">

          <h1>Don't have an account</h1>
          <Link to="/signin" className="text-green-500 font-medium">Sign up!</Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-3">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-5">Login into your account</p>

        <div className="flex gap-5 mb-5">
          <button className="flex-1 p-3 border rounded-md hover:border-green-500 flex items-center justify-center gap-3">
            <img src={GoogleIcon} alt="Google" className="w-6 h-6" /> Google
          </button>
          <button className="flex-1 p-3 border rounded-md hover:border-green-500 flex items-center justify-center gap-3">
            <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" /> Facebook
          </button>
        </div>

        <div className="relative text-center my-5">
          <span className="text-gray-400">Or continue with</span>
        </div>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-md"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-md"
            />
          </div>

          <div className="flex justify-between items-center mb-5">
            <label className="flex items-center cursor-pointer space-x-3">
              <div
                className={`relative w-12 h-6 rounded-full transition ${
                  isChecked ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => setIsChecked(!isChecked)}
              >
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
                    isChecked ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <span className="text-gray-800 text-lg">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-red-500 text-sm">Recover Password</a>
          </div>

          <button className="w-full bg-white text-black p-3 rounded-md text-lg border rounded-2xl hover:bg-gray-100">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
