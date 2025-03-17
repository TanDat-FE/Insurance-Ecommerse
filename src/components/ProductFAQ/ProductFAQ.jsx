import InfoCard from "@components/InfoCard/InfoCard";
import Navigate from "@components/Navigate/Navigate";

function ProductFAQ() {
  return (
    <div className="container mx-auto px-4 py-6 mt-6 sm:mt-10 lg:mt-16 xl:mt-20">
      <div className="flex flex-col lg:flex-row justify-center lg:gap-8 xl:gap-16 text-left">
        <Navigate />
        <div className="w-full lg:w-3/4 xl:w-2/3">
          <InfoCard />
        </div>
      </div>
    </div>
  );
}

export default ProductFAQ;
