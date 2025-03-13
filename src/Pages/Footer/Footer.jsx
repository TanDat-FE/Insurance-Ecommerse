import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white mt-24  flex flex-col md:flex-row text-center gap-25 py-5 px-61">
      <div className="basis-1/3">
        <div className="text-2xl font-bold mb-6">Get In Touch</div>
        <p className="text-sm text-[#737373] mb-5 text-left">
          The quick fox jumps over the lazy dog
        </p>
        <div className="flex justify-center items-center gap-8">
          <BsFacebook size={36} />
          <FaSquareXTwitter size={36} />
          <FaInstagramSquare size={36} />
        </div>
      </div>
      <div className="basis-1/3">
        <div className="text-2xl font-bold mb-6">Company infor</div>
      </div>
      <div className="basis-1/3">
        <div className="text-2xl font-bold mb-6">Features</div>
      </div>
    </div>
  );
}

export default Footer;
