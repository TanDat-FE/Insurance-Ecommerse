import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
function Contact() {
  return (
    <div className="bg-[#e2f4ff] flex flex-col justify-center items-center">
      <div className=" ml-5 mr-5 text-4xl font-bold w-[58%] md:w-[45%] text-center my-10">
        Contact us now and let us provide the perfect insurance
      </div>
      <div className="relative w-[35%] md:w-[40%]">
        <input
          type="email"
          className="text-xs my-5 w-full border border-[#a7adb1] outline-none py-5 pl-16 md:pl-20 bg-white rounded-lg placeholder:text-xs placeholder:font-normal placeholder:text-gray-500"
          placeholder="Enter email address here"
        />
        <MdOutlineEmail size={30} className="absolute left-4 md:left-7 top-8" />
        <IoIosSend size={30} className="absolute right-1 md:right-7 top-8" />
      </div>
      <div className="text-sm md:text-2xl font-normal pb-5">
        <div>Or contact us at (833) 202-1304</div>
        <div>Mon - Fri: 9AM - 8PM ET</div>
      </div>
    </div>
  );
}

export default Contact;
