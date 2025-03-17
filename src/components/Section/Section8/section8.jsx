import React, { useState } from 'react';

function Section8() {
  const [formData, setFormData] = useState({
    street: '',
    zipCode: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({
    street: '',
    zipCode: '',
    city: '',
  });

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
    'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const usCities = [
    'Ave Cleveland',
    'Los Angeles',
    'San Francisco',
    'New York',
    'Chicago',
    'Houston',
    'Phoenix',
    'Seattle',
    'Denver',
    'Miami',
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'street':
        return value.trim() ? '' : 'Street is required';
      case 'zipCode':
        return /^\d{5}$/.test(value) ? '' : 'Zip code must be 5 digits';
      case 'city':
        return value.trim() ? '' : 'City is required';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {
      street: validateField('street', formData.street),
      zipCode: validateField('zipCode', formData.zipCode),
      city: validateField('city', formData.city),
    };

    setErrors(newErrors);

    // Nếu có lỗi, không submit
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    console.log('Form submitted:', formData);
  };

  const addressSummary = `${formData.street} ${formData.city} ${formData.state} ${formData.zipCode}`.trim();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="">
        {/* Navigation Steps */}
        <div className="flex justify-between mb-10 gap-2">
          {["Your address", "Your home", "About you", "Your insurance history"].map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="text-xs text-gray-500 mb-2">{step}</div>
              <div className={`h-1 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-200"}`}></div>
            </div>
          ))}
        </div>

        {/* Form Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Let’s create your Personal Price Plan</h1>
        <p className="text-base text-gray-600 mb-8 text-center">Trust us, this won’t take long</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Street Input */}
          <div className="relative">
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              className={`peer w-full bg-transparent text-black text-sm sm:text-lg font-semibold border-2 px-3 pt-5 pb-2 focus:outline-none ${
                errors.street
                  ? 'border-t-2 border-l-2 border-r-2 border-t-[#F5F5F5] border-l-[#F5F5F5] border-r-[#F5F5F5] border-b-red-500'
                  : 'border-t-2 border-l-2 border-r-2 border-t-[#F5F5F5] border-l-[#F5F5F5] border-r-[#F5F5F5] border-b-black'
              }`}
              placeholder=" "
            />
            <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
              Street
            </label>
            {errors.street.trim() !== '' && (
              <div className="mt-1 text-red-500 text-xs">✖ {errors.street}</div>
            )}
          </div>

          {/* ZipCode, City, State in a row */}
          <div className="flex space-x-4">
            {/* ZipCode Input */}
            <div className="relative flex-1">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="peer w-full bg-transparent text-black text-sm sm:text-lg font-semibold border-2 px-3 pt-5 pb-2 focus:outline-none border-t-2 border-l-2 border-r-2 border-t-[#F5F5F5] border-l-[#F5F5F5] border-r-[#F5F5F5] border-b-black"
                placeholder=" "
              />
              <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
                Zipcode
              </label>
            </div>

            {/* City Input */}
            <div className="relative flex-1">
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="peer w-full bg-transparent text-black text-sm sm:text-lg font-semibold border-2 px-3 pt-5 pb-2 focus:outline-none border-t-2 border-l-2 border-r-2 border-t-[#F5F5F5] border-l-[#F5F5F5] border-r-[#F5F5F5] border-b-black appearance-none"
              >
                <option value="">Select a city</option>
                {usCities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
                City
              </label>
            </div>

            {/* State Select */}
            <div className="relative flex-1">
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="peer w-full bg-transparent text-black text-sm sm:text-lg font-semibold border-2 px-3 pt-5 pb-2 focus:outline-none border-t-2 border-l-2 border-r-2 border-t-[#F5F5F5] border-l-[#F5F5F5] border-r-[#F5F5F5] border-b-black appearance-none"
              >
                <option value="">Select a state</option>
                {usStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <label className="absolute left-3 top-2 text-gray-500 text-xs sm:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500">
                State
              </label>
            </div>
          </div>

          {/* Address Summary */}
          <div className="peer w-full bg-transparent text-black text-sm sm:text-lg font-semibold border-2 px-3 pt-5 pb-4 focus:outline-none border-t-2 border-l-2 border-r-2 border-t-[#F5F5F5] border-l-[#F5F5F5] border-r-[#F5F5F5] border-b-black">
            <p className="text-xs font-medium text-gray-700">Your address</p>
            <p className="text-sm text-gray-600">{addressSummary}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full max-w-[152px] cursor-pointer bg-blue-300 text-white py-3 rounded-full font-medium text-lg hover:bg-blue-400 transition duration-200"
          >
            Countinue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Section8;