import MobileMenu from "@/Pages/Header/MobileMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./constants.js";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 md:px-8 w-full max-w-[1280px] mx-auto border-b shadow-md border-gray-200">
      <div className="flex items-center">
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-500 rounded-full flex items-center justify-center"></div>

          <div className="absolute w-3 h-3 border-b-2 border-orange-400 rounded-full"></div>
        </div>
        <span className="text-xl font-bold ml-1">InsureState</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        {menuItems.map((item, index) => {
          return (
            <Link key={index} to={item.src}>
              {item.content}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:flex items-center space-x-2">
        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        <Link to="/Login">Login</Link>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖️" : "☰"}
      </button>

      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
