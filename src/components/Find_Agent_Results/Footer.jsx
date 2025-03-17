import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Get In Touch */}
          <div>
            <h3 className="font-bold">Get In Touch</h3>
            <p className="text-gray-500 text-sm">The quick fox jumps over the lazy dog</p>
            <div className="flex justify-center md:justify-start space-x-3 mt-2">
              <FaFacebook className="text-black text-xl" />
              <FaXTwitter className="text-black text-xl" />
              <FaInstagram className="text-black text-xl" />
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-bold">Company infor</h3>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold">Features</h3>
          </div>
        </div>
      </div>

      {/* Thanh màu xanh */}
      <div className="bg-blue-100 h-12"></div>
    </footer>
  );
}
