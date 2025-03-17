import ButtonBlue from "@components/Button/ButtonBlue/ButtonBlue";
import { naviItems } from "./constants.js";

function Navigate() {
  return (
    <div className="hidden lg:block w-full lg:w-[20%] max-w-[240px]">
      <div className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">
        Navigate to:
      </div>
      <div>
        <ul className="list-disc ml-4 sm:ml-5">
          {naviItems.map((item, index) => {
            return (
              <li
                key={index}
                className="mb-6 sm:mb-8 text-[#1a1a1a] text-sm sm:text-base"
              >
                {item.question}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6">
        <ButtonBlue content={"Get a quote"} />
      </div>
    </div>
  );
}

export default Navigate;
