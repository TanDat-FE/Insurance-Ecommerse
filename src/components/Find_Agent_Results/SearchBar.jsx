export default function SearchBar() {
  return (
    <div className="max-w-5xl mx-auto text-center my-8 px-4">
      {/* Tiêu đề */}
      <h1 className="text-2xl md:text-3xl font-bold">
        Find an InsureState agent near you
      </h1>
      <p className="text-gray-600 text-sm mt-2">
        Get home, life or auto insurance, and financial services in your area.
      </p>

      {/* Search Box */}
      <div className="mt-4 flex flex-col sm:flex-row justify-center items-center w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="City, state, or zipcode"
          className="border p-2 rounded-md sm:rounded-l-md w-full sm:w-60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 sm:mt-0 sm:ml-2 sm:rounded-r-md rounded-md hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </div>
  );
}
