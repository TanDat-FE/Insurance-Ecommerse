import ComboBox from "@components/InfoCard/ComboBox/ComboBox";
import {
  itemBoxs,
  infoCardExclusions,
  dataInsus1,
  dataInsus2,
  dataInsus3,
  dataInsus4,
} from "./ComboBox/constants";
import questionImg from "@assets/SVG/questionImg.svg";
import imagesHome1 from "@assets/images/image 46.jpg";
import imagesHome2 from "@assets/images/image 47.jpg";

function InfoCard() {
  return (
    <div className="w-full max-w-[775px] px-4 sm:px-6 md:px-0">
      <div className="text-2xl sm:text-3xl font-bold">
        What is home insurance?
      </div>
      <p className="text-xs sm:text-sm mt-4 sm:mt-8 mb-6 sm:mb-12">
        A home insurance policy protects you financially from disasters and
        accidents related to your home or property. With this, you pay a premium
        in exchange for different types of coverage.
      </p>
      <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
        What does home insurance cover?
      </div>
      <p className="text-xs sm:text-sm">
        The extent of your coverage will vary based on the policy you have. With
        a standard home insurance policy, here are the basic levels of coverage.
      </p>
      <div className="mt-6 sm:mt-8">
        {itemBoxs.map((item, index) => {
          return (
            <ComboBox
              key={index}
              icon={item.icon}
              title={item.title}
              des={item.des}
            />
          );
        })}
      </div>
      <div className="mt-8 sm:mt-14">
        <div className="text-2xl sm:text-3xl font-bold">
          What typically isn't covered under home insurance?
        </div>
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-6 md:gap-10 mt-6 md:ml-5 mb-6">
          <div>
            <ul className="list-disc">
              {infoCardExclusions.map((item, index) => {
                return (
                  <li className="mb-2.5" key={index}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-3.5 border border-[#9d9d9d] rounded-sm p-4 sm:p-6 w-full md:w-[360px]">
            <img src={questionImg} alt="Question mark" className="w-12 h-12" />
            <p className="text-center text-xs sm:text-sm">
              <span className="font-semibold">Did you know?</span> Coverage for
              water and sewer backups isn't usually part of a standard
              homeowners insurance policy, but can be easily added. If you live
              in an area that is prone to weather-related risks, you should also
              consider purchasing flood insurance and earthquake insurance
              separately for more complete protection.
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm">
          Certain high-value items, such as jewelry, art, or collectibles, may
          have limited coverage under a standard policy. You might need
          additional endorsements or floaters to fully insure these items.
        </p>
      </div>
      <div className="mt-10 sm:mt-16">
        <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
          Is home insurance required?
        </div>
        <img
          src={imagesHome1}
          className="w-full h-[120px] sm:h-[170px] object-cover rounded-md"
          alt="Home exterior"
        />
        <p className="text-xs sm:text-sm my-4 sm:my-5">
          While home insurance isn't a legal requirement, it's highly
          recommended and often necessary if you have a mortgage. Here's why:
        </p>
        {dataInsus1.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <div className="text-sm sm:text-base font-bold">
                {item.sectionTitle}
              </div>
              <p className="text-xs sm:text-sm my-2 sm:my-3.5">
                {item.sectionContent}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
          How much home insurance do you need?
        </div>
        <p className="text-xs sm:text-sm my-4 sm:my-5">
          The right amount of home insurance can vary based on your individual
          needs. Here's a breakdown of the essential coverage types and
          guidelines to help you get started:
        </p>
        <div className="border border-[#9d9d9d] rounded-sm px-4 sm:px-8 py-4 sm:py-5">
          <div className="text-sm sm:text-base font-bold">
            Dwelling coverage
          </div>
          <p className="text-xs sm:text-sm mt-2 sm:mt-3.5">
            Ensure you have enough coverage to rebuild your home from scratch if
            needed. This amount is typically based on the replacement cost,
            which differs from market value. Key factors influencing replacement
            cost include:
          </p>
          <ul className="list-disc text-xs sm:text-sm ml-4 sm:ml-6 mb-3.5">
            <li>Square footage of your home</li>
            <li>Construction cost in your area</li>
            <li>
              Home's features, such as the type of roof or custom fixtures
            </li>
          </ul>
          {dataInsus3.map((item, index) => {
            return (
              <div key={index} className="mb-3">
                <div className="text-sm sm:text-base font-bold">
                  {item.sectionTitle}
                </div>
                <p className="text-xs sm:text-sm my-2 sm:my-3.5">
                  {item.sectionContent}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 sm:mt-7 text-xs sm:text-sm text-left">
          These guidelines provide a starting point, but your insurance needs
          are unique. Review your policy's standard coverage amounts and compare
          them to the value of your assets. If you find you need more protection
          based on your risk tolerance or the value of your belongings, consider
          adjusting your coverage with a higher premium. The goal is to find the
          right fit for your specific situation. For personalized assistance
          with estimating your coverage needs, a licensed insurance advisor from
          Matic can help.
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
          How does a home insurance deductible work?
        </div>
        <img
          src={imagesHome2}
          className="w-full h-[120px] sm:h-[170px] object-cover rounded-md"
          alt="Home insurance deductible"
        />
        <p className="text-xs sm:text-sm my-4 sm:my-5">
          A home insurance deductible is the amount you pay out of pocket before
          your insurance coverage kicks in. Here's a quick rundown of how it
          works:
        </p>
        {dataInsus2.map((item, index) => {
          return (
            <div key={index} className="mb-3">
              <div className="text-sm sm:text-base font-bold">
                {item.sectionTitle}
              </div>
              <p className="text-xs sm:text-sm my-2 sm:my-3.5">
                {item.sectionContent}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
          How much does home insurance cost?
        </div>
        <p className="text-xs sm:text-sm mt-4 sm:mt-5">
          The cost of home insurance can vary widely based on several factors.
          Here's a look at what influences your insurance premium and how you
          can get a better understanding of what you might pay:
        </p>
        <div className="text-sm sm:text-base font-bold my-3 sm:my-5">
          Factors affecting home insurance costs
        </div>
        <div className="border border-[#9d9d9d] rounded-sm px-4 sm:px-8 py-4 sm:py-5">
          {dataInsus4.map((item, index) => {
            return (
              <div key={index} className="mb-3">
                <div className="text-sm sm:text-base font-bold">
                  {item.sectionTitle}
                </div>
                <p className="text-xs sm:text-sm my-2 sm:my-3.5">
                  {item.sectionContent}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-sm sm:text-base font-bold mt-4 sm:mt-7">
          Average cost of home insurance
        </div>
        <p className="mt-3 sm:mt-6 text-xs sm:text-sm text-left">
          On average, home insurance in the U.S. costs $1,779 per year in 2024*,
          though this can vary significantly based on the factors listed above.
          It's important to get quotes from multiple insurers to find the best
          rate for your specific situation.
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
          How to buy homeowners insurance
        </div>
        <div className="text-sm sm:text-base font-bold my-3 sm:my-5">
          What you need to know to get an accurate quote
        </div>
        <p className="text-xs sm:text-sm mt-3 sm:mt-5">
          Your homeowners insurance quote is based on a variety of factors —
          like your home details, claims history, and property information. For
          the most accurate quote, have this information handy before you begin
          shopping:
        </p>
        <div className="mb-5 sm:mb-7">
          <div className="text-sm sm:text-base font-bold mt-4 sm:mt-5 mb-2">
            Property information
          </div>
          <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm">
            <li>What is the assessed market value of the property?</li>
            <li>Do you plan to rent this property to others?</li>
            <li>Is the property in a designated high risk flood zone?</li>
          </ul>
        </div>
        <div className="mb-5 sm:mb-7">
          <div className="text-sm sm:text-base font-bold mt-4 sm:mt-5 mb-2">
            General home details
          </div>
          <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm">
            <li>
              What is the style of the home (ranch, craftsman, victorian, etc.)?
            </li>
            <li>When was the home built?</li>
          </ul>
        </div>
        <div className="mb-5 sm:mb-7">
          <div className="text-sm sm:text-base font-bold mt-4 sm:mt-5 mb-2">
            Home exterior details
          </div>
          <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm">
            <li>
              What type of construction is the home (frame, masonry, etc.)?
            </li>
            <li>
              What are the exterior walls made of (vinyl, brick, stone, wood,
              etc.)?
            </li>
            <li>
              What is the shape of the roof, the material, and the last time it
              was updated?
            </li>
          </ul>
        </div>
        <div className="mb-5 sm:mb-7">
          <div className="text-sm sm:text-base font-bold mt-4 sm:mt-5 mb-2">
            Home interior details
          </div>
          <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm">
            <li>When was the electrical wiring last updated?</li>
            <li>Does it have circuit breakers or a fuse box?</li>
            <li>When was the plumbing last updated?</li>
            <li>When was the heating/air conditioning last updated?</li>
          </ul>
        </div>
        <div className="mb-5 sm:mb-7">
          <div className="text-sm sm:text-base font-bold mt-4 sm:mt-5 mb-2">
            Current insurance information
          </div>
          <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm">
            <li>Who is your current carrier?</li>
            <li>Have you had to file any claims?</li>
            <li>Has your insurance ever been canceled or declined?</li>
          </ul>
        </div>
        <div className="mb-5 sm:mb-7">
          <div className="text-sm sm:text-base font-bold mt-4 sm:mt-5 mb-2">
            Discounts eligibility
          </div>
          <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm">
            <li>
              Are there fire extinguishers, smoke alarms, and/or deadbolts in
              the home?
            </li>
            <li>
              Is there a sprinkler system or security system on the property?
            </li>
            <li>
              For a full list of discounts you could be eligible for, read about
              18 common homeowners insurance discounts here »
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
