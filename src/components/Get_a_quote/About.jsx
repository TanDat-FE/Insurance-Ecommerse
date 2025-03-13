import React from 'react';
import Footer from '@/Pages/Footer/Footer';

const About = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
    <div className="w-full max-w-2xl p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="text-gray-400">Your address</div>
        <div className="text-gray-400">Your home</div>
        <div className="text-blue-500 border-b-2 border-blue-500">About you</div>
        <div className="text-gray-400">Your insurance history</div>
      </div>
      <h1 className="text-2xl font-bold text-center mb-6">Tell us about your insurance history</h1>
      <div className="flex justify-center mb-6">
        <img
          src="https://storage.googleapis.com/a1aa/image/LcxiZiDaYIWNQzv2G5E7aXvQjauIYEwiBiiPrkmzXgY.jpg"
          alt="Icon representing insurance history"
          className="w-24 h-24"
          width="100"
          height="100"
        />
      </div>
      <form>
      <div className="relative mb-4">
        <input 
            className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 pt-5 text-gray-1000 font-normal placeholder-transparent" 
            type="text" 
            id="first_name" 
            placeholder="Legal first name"
            defaultValue=""
        />
        <label 
             htmlFor="first_name" 
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700"
        >
            Legal first name
        </label>
        {/* <p className="text-red-500 text-sm mt-1">Legal first name text is required</p> */}
        </div>
        <div className="relative mb-4">
        <input 
            className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 pt-5 text-gray-1000 font-normal placeholder-transparent" 
            type="text" 
            id="Legal middle name" 
            placeholder="Legal middle name(Optional)"
            defaultValue=""
        />
        <label 
             htmlFor="first_name" 
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700"
        >
            Legal middle name(Optional)
        </label>
        </div>
        <div className="relative mb-4">
        <input 
            className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 pt-5 text-gray-1000 font-normal placeholder-transparent" 
            type="text" 
            id="last_name" 
            placeholder="Legal last name"
            defaultValue=""
        />
        <label 
             htmlFor="=last_name" 
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700"
        >
            Legal last name
        </label>
        </div>
        <div className="relative mb-4">
        <input 
            className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 pt-5 text-gray-1000 font-normal placeholder-transparent" 
            type="date" 
            id="date_of_birth" 
            placeholder=""
            defaultValue=""
        />
        <label 
             htmlFor="" 
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700"
        >
            Day of birth (MM/DD/YYYY)
        </label>
        </div>
        <div className="relative mb-4">
        <input 
            className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 pt-5 text-gray-1000 font-normal placeholder-transparent" 
            type="text" 
            id="email" 
            placeholder="Email address"
            defaultValue=""
        />
        <label 
             htmlFor="Email address" 
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700"
        >
            Email address
        </label>
        </div>
        <div className="relative mb-4">
        <input 
            className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 pt-5 text-gray-1000 font-normal placeholder-transparent" 
            type="text" 
            id="phone" 
            placeholder=""
            defaultValue=""
        />
        <label 
             htmlFor="first_name" 
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700"
        >
            Phone number
        </label>
        </div>
        <div className='flex justify-center'>
            <button className='bg-blue-500 text-white px-8 py-2 rounded-full' type='submit'>Continue</button>
        </div>
      </form>
      
    </div>
    <Footer />
  </div>
  );
};

export default About;
