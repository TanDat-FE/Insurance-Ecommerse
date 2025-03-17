import React, { useState } from 'react';

function Section9() {
  const [formData, setFormData] = useState({
    totalFeet: '',
    yearBuilt: '',
    propertyType: '',
    constructionMaterial: '',
    stories: '',
    heating: '',
    cooling: '',
    garage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="text-center">
      <div className="flex justify-between items-center rounded-md mb-10 gap-[6px]">
        {['Your address', 'Your home', 'About you', 'Your insurance history'].map((label, index) => (
          <div key={index} className="flex-1 text-center">
            <div className="text-xs text-gray-500 mb-2">{label}</div>
            <div className={`h-1 rounded-full ${index === 1 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4">Help us to know your home</h1>
      <div className="">
        {[
          { label: 'Total feet', name: 'totalFeet', type: 'text', placeholder: '250' },
          { label: 'Year built', name: 'yearBuilt', type: 'text', placeholder: '2010' },
          { label: 'Number of stories', name: 'stories', type: 'text', placeholder: '2' },
          { label: 'Heating system', name: 'heating', type: 'text', placeholder: 'Central' },
          { label: 'Cooling system', name: 'cooling', type: 'text', placeholder: 'AC' },
          { label: 'Garage/Carport', name: 'garage', type: 'text', placeholder: '1' },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name} className="mb-4">
            <label className="block text-gray-600 mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
              placeholder={placeholder}
            />
          </div>
        ))}
        {[
          { label: 'Property type', name: 'propertyType', options: ['Single-family home'] },
          { label: 'Primary construction material', name: 'constructionMaterial', options: ['Concrete'] },
        ].map(({ label, name, options }) => (
          <div key={name} className="mb-4">
            <label className="block text-gray-600 mb-1">{label}</label>
            <select
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Select</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Section9;
