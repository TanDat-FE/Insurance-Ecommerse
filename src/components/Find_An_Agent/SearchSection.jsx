export default function SearchSection() {
  return (
    <section className="text-center py-12 px-6 bg-white mt-[-180px]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Find an InsureState agent near you
        </h2>
        <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
          Get home, life or auto insurance, and financial services in your area.
          Start here to locate a State Farm insurance agent near you.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="City, state / Zipcode"
            className="border px-3 py-2 rounded-md sm:rounded-l-md w-full sm:w-64 text-sm focus:ring-2 focus:ring-blue-300 outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 sm:mt-0 sm:ml-2 sm:rounded-r-md rounded-md hover:bg-blue-600 transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
