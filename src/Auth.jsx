import React, { useState } from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      {/* Chữ Sign in/Sign up ở góc phải */}
      <div className="absolute top-6 right-10 text-gray-500">
        {isSignUp ? "Have an account?" : "Don't have an account?"}{" "}
        <span
          className="text-green-500 cursor-pointer font-semibold"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Sign in!" : "Sign up!"}
        </span>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-2">
          {isSignUp ? "Get Started With MAKER" : "Welcome Back"}
        </h2>
        <p className="text-center text-gray-500 mb-4">
          {isSignUp ? "Getting started is easy" : "Login into your account"}
        </p>

        {/* Nút login với Google/Facebook */}
        <div className="flex justify-center gap-4 mb-4">
        <button className="flex items-center gap-2 border p-2 rounded-lg w-1/2 justify-center bg-white">
  <img
    src="https://developers.google.com/identity/images/g-logo.png"
    alt="Google"
    className="w-6 h-6"
  />
  <span className="text-black font-semibold">Google</span>
</button>

          <button className="flex items-center gap-2 border p-2 rounded-lg w-1/2 justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            Facebook
          </button>
        </div>

        {/* Gạch ngang và chữ "Or continue with" */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 mx-2 text-sm">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <form>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-2 border rounded-lg"
            />
          )}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 mb-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-2 border rounded-lg"
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-2 border rounded-lg"
            />
          )}

          {/* Remember me + Recover Password */}
          {!isSignUp && (
            <div className="flex justify-between items-center text-sm mb-4">
              <label className="flex items-center text-gray-500">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-red-500">Recover Password</a>
            </div>
          )}

          {/* Nút Login hoặc Sign up */}
          <button className="w-full p-3 rounded-lg text-white font-semibold 
                             transition-all duration-300 
                             bg-green-500 hover:bg-green-600">
            {isSignUp ? "Create Account" : "Log In"}
          </button>
        </form>

        {/* Điều khoản sử dụng */}
        {isSignUp && (
          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing you indicate that you read and agreed to the{" "}
            <a href="#" className="text-blue-500">Terms of Use</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
