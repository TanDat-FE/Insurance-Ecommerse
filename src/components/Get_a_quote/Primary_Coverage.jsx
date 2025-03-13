import React from 'react';
import Footer from '@/Pages/Footer/Footer';

const HomeInsuranceQuote = () => {
  return (
   
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-center text-xl font-semibold mb-2">
          Here's what we found out about your home
        </h1>
        <p className="text-center text-gray-500 mb-4">
         Powered by 
         <img 
            src="" 
            alt="InsureStateAVM logo"
            className="inline-block w-5 h-5 mx-2 align-middle" 
        />
        <span className="font-semibold">InsureStateWM</span>
</p>

        <div className="bg-blue-100 p-9 rounded-lg flex flex-col md:flex-row items-center justify-between mb-4">
          <div className="flex items-center mb-4 md:mb-0 md:border-r md:border-gray-300 md:pr-4">
            <img
              alt="House icon"
              className="mr-4"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/XeRZymtM3DwYFOjvJdJW9SJpPR-KRqZUYjV8_uR8JPk.jpg"
              width="80"
            />
          </div>
          <div>
              <p className="text-2xl font-semibold">$310,000</p>
              <p className="text-gray-500">
              <p>This is what it may cost</p>
              <p>to replace your home</p>
              </p>
            </div>
          <div className="text-center mb-4 md:mb-0 md:border-l md:border-gray-300 md:px-4">
            <p className="text-xl font-semibold">Home quote</p>
            <p className="text-2xl font-semibold">
              $137.42<span className="text-sm">/mo</span>
            </p>
            <p className="text-gray-500">
              Deductible: <span className="font-semibold">$2,000</span>
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 mb-4 flex items-center justify-center">
        <img 
             src="https://img.icons8.com/?size=100&id=86803&format=png&color=000000" 
            alt="Location Icon" 
            className="w-6 h-6 mr-2" 
        />
            <span>123, Newyork, Ave Cleveland, California</span>
        </div>
        <h2 className="text-center text-xl font-semibold mb-4">Primary coverage</h2>
        <div className="flex justify-between py-2 border-b">
          <span>Dwelling amount</span>
          <span className="font-semibold text-blue-600">$683,000</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Personal Property</span>
          <span className="font-semibold text-blue-600">$530,000</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Dwelling Extension</span>
          <span className="font-semibold text-blue-600">$56,000</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Increased Dwelling Limit</span>
          <span className="font-semibold text-blue-600">$60,000</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Increased Dwelling Limit</span>
          <span className="font-semibold text-blue-600">$160,000</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Policy deductible</span>
          <span className="font-semibold text-blue-600">$2,000</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Hurricane Duration Deductible</span>
          <span className="font-semibold text-blue-600">$4,000</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Personal Liability</span>
          <span className="font-semibold text-blue-600">$300,000</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Medical Payments</span>
          <span className="font-semibold text-blue-600">$1,000</span>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-semibold mb-4">
            Need expert advice? Connect with our insurance specialists today!
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Find an agent
          </button>
          <div className="flex justify-center">
             <Footer /> 
          </div>
        </div>
      </div>
    
  );
  
};

export default HomeInsuranceQuote;