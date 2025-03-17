import { useState } from "react";
import ButtonIcon from "@components/Button/ButtonIcon/ButtonIcon";

export default function HomeInf() {
  const [zipCode, setZipCode] = useState("");

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div className="bg-white flex items-center justify-end min-h-screen p-2">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Create an affordable price, just for you
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="src/assets/HomePage.jpeg"
              alt="A person in a red shirt talking to a person in a black SUV"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-4 ml-5.5 break-words">
              We're in the business of helping
            </h2>
            <p className=" text-gray-600  mb-4 ml-5.5 max-w-md break-words">
            Talk with an agent about personal price plan to help you save money and help protect you and your property.
            </p>
            <div className="flex justify-center md:justify-start ml-5">
            <ButtonIcon className="w-64" />
              <button className="bg-blue-500 text-white rounded-full px-4 py-2 ml-4">
                Find an agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
