import ButtonIcon from "@components/Button/ButtonIcon/ButtonIcon";
import { BsFillSendFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import DividerWithOptions from "@components/DividerWithOptions/DividerWithOptions";
import InputCommon from "@components/InputCommon/InputCommon";
import { useState } from "react";
import { Switch } from "antd";
import ButtonSubmit from "@components/Button/ButtonSubmit/ButtonSubmit";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };
  console.log(isRegister);

  return (
    <div className="w-[600px] h-auto bg-[#f1f2f6] rounded-lg">
      <div className="flex justify-around items-center pt-10 ">
        <div className="flex justify-center items-center cursor-pointer">
          <BsFillSendFill size={30} color="#20dc49" />
          <div className="text-base font-semibold">Logo here</div>
        </div>
        <div className="flex justify-center items-end gap-2">
          <div className="text-sm font-light">
            {isRegister ? "have an account?" : "Don't have an account?"}
          </div>
          <span
            className="text-[#20dc49] font-semibold cursor-pointer"
            onClick={handleToggle}
          >
            Sign up!
          </span>
        </div>
      </div>
      <div className="mt-12">
        <div className="text-4xl font-bold mb-2">
          {isRegister ? "Get Started With MAKER" : "Wellcome Back"}
        </div>
        <div className="text-lg font-medium">
          {isRegister ? "Getting started is easy" : "Login into your account"}
        </div>
        <div className="flex justify-center gap-5 mt-12">
          <ButtonIcon
            isPrimary={true}
            icon={<FcGoogle size={22} />}
            content={"Google"}
          />
          <ButtonIcon
            isPrimary={false}
            icon={<BiLogoFacebookCircle size={22} />}
            content={"Facebook"}
          />
        </div>
      </div>
      <DividerWithOptions />
      {isRegister && <InputCommon type={"text"} placeholder={"Full Name"} />}
      <InputCommon
        type={"email"}
        placeholder={isRegister ? "Enter Email" : "Email"}
      />
      <InputCommon type={"password"} placeholder={"Password"} />
      {isRegister && (
        <InputCommon type={"password"} placeholder={"Confirm Password"} />
      )}
      {!isRegister && (
        <div className="flex justify-around items-center gap-5 mb-8">
          {/* {!isRegister && ( */}
          <div className="flex justify-center items-center gap-2 pl-12">
            <Switch />
            <span>Remember me</span>
          </div>
          {/* )} */}
          <div className="text-red-500 pr-10">Recover Password</div>
        </div>
      )}

      <div className="pb-8">
        {isRegister ? (
          <ButtonSubmit content={"Create Account"} />
        ) : (
          <ButtonSubmit content={"Log In"} isPrimary={true} />
        )}
      </div>
    </div>
  );
}

export default Login;
