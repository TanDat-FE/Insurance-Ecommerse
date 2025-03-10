import { useState } from "react";
import { faqs } from "./data";
import upicon from "../../assets/upicon.svg";
import downicon from "../../assets/downicon.svg";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-['Roboto'] font-bold text-[36px] text-center mb-9">Frequently asked questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-[26px] py-[48px] text-left text-md font-normal bg-white cursor-pointer"
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <img src={upicon} alt="Iconupup" className="w-6 h-6" />
                ) : (
                  <img src={downicon} alt="Icondown" className="w-6 h-6" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-6 -mt-[28px] flex flex-col items-start text-black-500">
                <p className="w-full text-left block">{faq.answer}</p>
                <button className=" mt-[35px] px-4 py-2 bg-[#31A0FE] text-white font-medium rounded-lg cursor-pointer">
                  Get a quote now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
