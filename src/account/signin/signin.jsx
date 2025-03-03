import React from "react";
import MyIcon from "../../assets/icon1.svg";
import GoogleIcon from "../../assets/google1.svg";
import FacebookIcon from "../../assets/fb.svg";
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full mx-auto p-12 bg-gray">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            
            
          </div>
          <div className="flex flex-row gap-2">

          <h1>Don't have an account</h1>
          <Link to="/" className="text-green-500 font-medium">Log in!</Link>

          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-3">Get starter with MAKER</h2>
        <p className="text-gray-600 text-center mb-5">Getting started is easy</p>

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
            type="name"
            placeholder="Full name"
            className="w-full p-3 mb-4 border rounded-md"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 mb-4 border rounded-md"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-md"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 border rounded-md"
            />
          </div>
           

          <button className="w-full bg-green-500 text-black p-3 rounded-md text-lg border rounded-2xl">
            Sign In
          </button>
          <h1 className="text-gray-500">By continuing you indicate that you read and agreed to the Terms of Use</h1>
        </form>
      </div>
    </div>
  );
};

export default Signin;