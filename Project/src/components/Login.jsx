
import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
      
      <div className="text-center">
        <img src="your-logo-url-here" alt="Logo" className="mx-auto mb-4 w-16 h-16" />
      </div>

      
      <h2 className="text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
      <p className="text-center text-gray-600">Login into your account</p>

      
      <div className="flex justify-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google" className="w-5 h-5" />
          Google
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          <img src="https://img.icons8.com/?size=100&id=nhX8zsseyDoS&format=png&color=000000" alt="Facebook" className="w-5 h-5" />
          Facebook
        </button>
      </div>

      
      <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-500">Or continue with</span>
     <div className="flex-grow border-t border-gray-300"></div>
     </div>

      
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-500 rounded" />
          <label className="ml-2 text-sm text-gray-600">Remember me</label>
        </div>
        <a href="#" className="text-sm text-blue-500 hover:underline">Recover Password</a>
      </div>

      
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Log In
      </button>

      
      
    </div>
  </div>
  );
}

export default Login;
