function ComboBox({ icon, title, des }) {
  return (
    <div className="mb-3.5 border border-[#a5a5a5] rounded-sm p-3.5">
      <div className="flex items-center gap-4">
        <img src={icon} className="w-[30px] h-[30px]" />
        <div className="flex flex-col items-start gap-5">
          <div className="text-xs font-bold">{title}</div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}

export default ComboBox;
