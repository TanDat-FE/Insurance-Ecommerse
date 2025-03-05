import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

function InputCommon({ type, placeholder }) {
  const [showPassword, setShowPassword] = useState(true);
  const isPassword = type === "password";
  const isShowPassword = type === "password" && (showPassword ? "text" : type);

  return (
    <div>
      <div className="pl-3 pr-3 mb-8 relative">
        <input
          type={isShowPassword}
          className="w-[70%] border border-[#e1e1e1] outline-none py-5 pl-5 bg-white rounded-lg"
          placeholder={placeholder}
        />
        {isPassword && (
          <div
            className="absolute top-6 right-30"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoEyeOutline size={20} color="#b7b7b7" />
            ) : (
              <FaRegEyeSlash size={20} color="#b7b7b7" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
