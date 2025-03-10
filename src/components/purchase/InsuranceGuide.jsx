import React from "react";
import { insuranceSteps } from "./data";

const InsuranceGuide = () => {
  return (
    <div>
      <h1 className="text-2xl font-['Roboto'] font-bold text-[36px] text-center mb-9">
        How can you purchase our insurance product
      </h1>
      {insuranceSteps.map((section, index) => (
        <div key={index} className="flex flex-col items-start">
          <h2 className="text-xl font-['Roboto'] font-normal text-[16px]">{section.title}</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 font-['Roboto'] font-normal text-[16px] flex flex-col items-start">
            {section.steps.map((step, id) => (
              <li className="-mb-1" key={id}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InsuranceGuide;
