// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white border-b border-gray-300 shadow-sm">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        
//         {/* Logo + Brand Name */}
//         <div className="flex items-center space-x-2">
//           <div className="w-7 h-7 rounded-full border-4 border-blue-500 flex items-center justify-center">
//             <div className="w-2.5 h-2.5 rounded-full border-2 border-orange-400 border-t-transparent"></div>
//           </div>
//           <h1 className="text-lg font-bold">InsureState</h1>
//         </div>

//         {/* Navigation (Desktop) */}
//         <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
//           {["Product", "My document", "Claims", "Bills", "Get a quote", "Find an agent"].map((item, index) => (
//             <a key={index} href="#" className={`hover:underline ${item === "Find an agent" ? "font-bold" : ""}`}>
//               {item}
//             </a>
//           ))}
//         </nav>

//         {/* Login (Desktop) */}
//         <div className="hidden md:flex items-center space-x-1">
//           <div className="w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
//           <a href="#" className="text-sm text-gray-700">Login</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)} 
//           className="md:hidden transition-all duration-300"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div 
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="bg-white border-t border-gray-300 flex flex-col items-center space-y-4 py-4 text-gray-700">
//           {["Product", "My document", "Claims", "Bills", "Get a quote", "Find an agent"].map((item, index) => (
//             <a key={index} href="#" className={`hover:underline ${item === "Find an agent" ? "font-bold" : ""}`}>
//               {item}
//             </a>
//           ))}
//           <div className="flex items-center space-x-1">
//             <div className="w-2.5 h-2.5 bg-purple-400 rounded-full"></div>
//             <a href="#" className="text-sm text-gray-700">Login</a>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-4 border-blue-500 flex items-center justify-center relative">
            <div className="w-3 h-3 rounded-full border-2 border-orange-400 border-t-transparent"></div>
          </div>
          <h1 className="text-lg font-bold">InsureState</h1>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:underline">Product</a>
          <a href="#" className="hover:underline">My document</a>
          <a href="#" className="hover:underline">Claims</a>
          <a href="#" className="hover:underline">Bills</a>
          <a href="#" className="hover:underline">Get a quote</a>
          <a href="#" className="font-bold">Find an agent</a>
        </nav>

        {/* Login */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          <a href="#" className="text-sm text-gray-700">Login</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-700">
            <a href="#" className="hover:underline">Product</a>
            <a href="#" className="hover:underline">My document</a>
            <a href="#" className="hover:underline">Claims</a>
            <a href="#" className="hover:underline">Bills</a>
            <a href="#" className="hover:underline">Get a quote</a>
            <a href="#" className="font-bold">Find an agent</a>
            <a href="#" className="text-sm text-gray-700">Login</a>
          </nav>
        </div>
      )}
    </header>
  );
}
