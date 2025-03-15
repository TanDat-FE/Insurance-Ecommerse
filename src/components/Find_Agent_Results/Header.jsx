import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 border-b shadow-md relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-4 border-blue-500 flex items-center justify-center relative">
            <div className="w-3 h-3 rounded-full border-2 border-orange-400 border-t-transparent"></div>
          </div>
          <span className="font-bold text-lg text-gray-800">InsureState</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:text-blue-500 transition">Product</a>
          <a href="#" className="hover:text-blue-500 transition">My document</a>
          <a href="#" className="hover:text-blue-500 transition">Claims</a>
          <a href="#" className="hover:text-blue-500 transition">Bills</a>
          <a href="#" className="hover:text-blue-500 transition">Get a quote</a>
          <a href="#" className="font-bold text-blue-600">Find an agent</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <HiX className="w-6 h-6 text-gray-700" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-md transition-all duration-300 ease-in-out
          ${menuOpen ? "block opacity-100 max-h-screen py-4" : "hidden opacity-0 max-h-0"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-gray-700">
          <a href="#" className="hover:text-blue-500 transition">Product</a>
          <a href="#" className="hover:text-blue-500 transition">My document</a>
          <a href="#" className="hover:text-blue-500 transition">Claims</a>
          <a href="#" className="hover:text-blue-500 transition">Bills</a>
          <a href="#" className="hover:text-blue-500 transition">Get a quote</a>
          <a href="#" className="font-bold text-blue-600">Find an agent</a>
          <a
            href="#"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
