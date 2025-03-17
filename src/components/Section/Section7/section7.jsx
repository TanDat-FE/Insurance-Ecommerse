import React, { useState } from "react";

const Section7 = () => {
  const [formData, setFormData] = useState({
    product: "",
    zipcode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative flex flex-col items-center text-center p-4">
      

      {/* Tiêu đề */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        Create an affordable price, just for you
      </h1>
      <p className="text-lg mb-[66px]">Introducing the InsureState Personal Price Plan</p>

      {/* Input fields */}
      <div className="flex flex-wrap items-center justify-center w-full max-w-[495px] gap-3">
        <div className="relative flex-1 min-w-[160px] max-w-[231px]">
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            className="peer w-full bg-transparent text-black text-sm sm:text-lg font-semibold border border-gray-300 rounded-md px-3 pt-5 pb-2 transition focus:outline-none focus:border-gray-500"
            placeholder=" "
          />
          <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
            Product
          </label>
        </div>

        <div className="relative min-w-[80px] max-w-[88px]">
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            className="peer w-full bg-transparent text-black text-sm sm:text-lg font-semibold border border-gray-300 rounded-md px-3 pt-5 pb-2 transition focus:outline-none focus:border-gray-500"
            placeholder=" "
          />
          <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
            Zipcode
          </label>
        </div>

        <button className="flex items-center justify-center bg-blue-500 text-white font-semibold text-sm sm:text-base w-full min-w-[120px] sm:w-[152px] h-[44px] rounded-3xl shadow-md hover:bg-blue-600 transition">
          Get A Quote
        </button>
      </div>
        {/* Thanh tiến trình phía sau */}
      <div className="relative w-full max-w-[600px] flex justify-between items-center -z-10 gap-[6px] mt-[92px] mb-[182px]">
        {["Your address", "Your home", "About you", "Your insurance history"].map((step, index) => (
          <div key={index} className="flex flex-col items-center w-1/4 ">
            <span className="font-semibold text-sm">{step}</span>
            <div className="w-full h-1 bg-blue-500 mt-1 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
