import { FcGoogle } from "react-icons/fc";
import classNames from "classnames";

function ButtonIcon({ isPrimary, icon, content }) {
  return (
    <div
      className={classNames(
        "bg-white py-3 px-6 border rounded-lg cursor-pointer",
        isPrimary ? "border-[#20DC49]" : "border-[#DEDEDE] "
      )}
    >
      <div className="flex justify-center items-center gap-2">
        {icon}
        <div className="text-xs font-medium">{content}</div>
      </div>
    </div>
  );
}

export default ButtonIcon;
