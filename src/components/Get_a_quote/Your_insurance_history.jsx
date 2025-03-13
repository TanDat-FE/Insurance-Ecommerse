import React from 'react';
import Footer from '@/Pages/Footer/Footer';

const InsuranceHistory = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="text-gray-400">Your address</div>
          <div className="text-gray-400">Your home</div>
          <div className="text-gray-400">About you</div>
          <div className="text-blue-500 border-b-2 border-blue-500">
            Your insurance history
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">
          Tell us about your insurance history
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src="https://storage.googleapis.com/a1aa/image/LcxiZiDaYIWNQzv2G5E7aXvQjauIYEwiBiiPrkmzXgY.jpg"
            alt="Icon representing insurance history"
            className="w-24 h-24"
            width="100"
            height="100"
          />
        </div>
        <div className="relative mb-4">
          <input
            className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 pt-5 text-gray-700 placeholder-transparent"
            type="text"
            id=""
            placeholder="What is the name of your most recent property insurance carrier?"
            defaultValue=""
          />
          <label
            htmlFor="first_name"
            className="absolute left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700"
          >
            What is the name of your most recent property insurance carrier?
          </label>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-4 lg:space-y-0">
          <p className="text-gray-500 text-center lg:text-left">
            Has any applicant had any losses or not, in the past 5 years?
          </p>
          <div className="flex space-x-4">
            <button className="border border-gray-300 px-6 py-2 rounded-full transition duration-200 ease-in-out transform hover:bg-gray-200">
              Yes
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-full transition duration-200 ease-in-out transform hover:bg-gray-200">
              No
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-8 py-2 rounded-full" type="submit">
            Finish
          </button>
        </div>
      </div>
      <Footer className="w-full" />
    </div>
  );
};

export default InsuranceHistory;
