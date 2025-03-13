import { MdOutlineArrowForwardIos } from "react-icons/md";

function Breadcrumb({ links }) {
  return (
    <nav className="text-gray-600 text-sm border-b lg:ml-4 lg:w-[99%] md:w-[87%] md:ml-35 ml-17 shadow-md border-gray-200 px-4 w-[119%]">
      <ul className="hidden md:flex space-x-2 py-3.5">
        {links.map((link, i) => (
          <li key={i} className="flex items-center">
            <a
              href={link.href}
              className={`hover:text-blue-600 ${i === 0 ? "font-bold" : ""}`}
            >
              {link.name}
            </a>
            {i < links.length - 1 && (
              <span className="mx-1 text-gray-400">
                <MdOutlineArrowForwardIos size={14} />
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* 📱 Hiển thị rút gọn trên màn hình 376px - 700px */}
      <div className="hidden sm:flex md:hidden items-center py-3.5">
        <a href={links[0]?.href} className="text-blue-600 font-bold">
          {links[0]?.name}
        </a>
        <span className="mx-1 text-gray-400">/</span>
        <span className="text-gray-400">...</span>
        <span className="mx-1 text-gray-400">/</span>
        <a
          href={links[links.length - 1]?.href}
          className="text-blue-600 font-bold"
        >
          {links[links.length - 1]?.name}
        </a>
      </div>

      {/* 📱 Hiển thị chỉ mục cuối cùng trên màn hình ≤375px */}
      <div className="sm:hidden flex items-center py-3.5">
        <span className="text-gray-400 mr-2">...</span>
        <a
          href={links[links.length - 1]?.href}
          className="font-bold text-blue-600"
        >
          {links[links.length - 1]?.name}
        </a>
      </div>
    </nav>
  );
}

export default Breadcrumb;
