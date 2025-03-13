import ButtonBlue from "@components/Button/ButtonBlue/ButtonBlue";
import ButtonZip from "@components/Button/ButtonZip/ButtonZip";
import Homeowner from "@assets/images/homeowners.jpg";

function Homeowners() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text content section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left">
            Homeowners insurance
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-left">
            From roof to floor, from repair to replace, from furniture to
            keepsakes, we can help protect your home and property. Find out why
            more homeowners choose State Farm® as their home insurance company
            over any other insurer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <ButtonZip content={"Zipcode"} />
            <ButtonBlue content={"Get a quote"} />
          </div>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={Homeowner}
            alt="Homeowners"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Homeowners;
