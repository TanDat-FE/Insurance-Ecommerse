import React from "react";

function Reasons() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-16">
      {/* Phần lý do chọn InsureState */}
      <section className="text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Reasons you can count on <span className="text-blue-600">InsureState</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Since 1922, we’ve been working hard to help better protect you and those you live. We think our numbers reflect that care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "$1,234", desc: "That’s how much you could save if you choose to personalize your bundle with us" },
            { title: "91 million +", desc: "That’s how much you could save if you choose to personalize your bundle with us" },
            { title: "19,000 agents", desc: "That’s how much you could save if you choose to personalize your bundle with us" },
          ].map((item, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phần sản phẩm bảo hiểm */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold mb-6">Explore our insurance products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center justify-between ${
                index === 1 ? "bg-blue-100" : "bg-white"
              }`}
            >
              <div className="h-64 w-full bg-gray-200 rounded-lg"></div>
              <button className="mt-6 w-36 h-12 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reasons;
