import classNames from "classnames";

function ButtonSubmit({ content, isPrimary }) {
  return (
    <button
      className={classNames(
        "w-[410px] h-[45px] border  rounded-sm border-[#5a5a5c]",
        isPrimary ? "" : "bg-[#20DC49]"
      )}
    >
      {content}
    </button>
  );
}

export default ButtonSubmit;
