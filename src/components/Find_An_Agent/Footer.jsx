import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Grid layout responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Get In Touch */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Get In Touch</h3>
            <p className="text-gray-500 text-sm mt-1">
              The quick fox jumps over the lazy dog
            </p>
            <div className="flex space-x-3 mt-2">
              <FaFacebook className="text-black text-xl" />
              <FaXTwitter className="text-black text-xl" />
              <FaInstagram className="text-black text-xl" />
            </div>
          </div>

          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Company info</h3>
          </div>

          {/* Features */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold">Features</h3>
          </div>
        </div>
      </div>

      {/* Thanh màu xanh dưới */}
      <div className="bg-blue-100 h-12 w-full"></div>
    </footer>
  );
}
