import { useState } from "react";
import MapIcon from "../../assets/SVG/mapicon.svg"; // Import icon Map
import ShareIcon from "../../assets/SVG/share.svg"; // Import icon Share

const totalResults = 25;

const agents = [
  {
    name: "Megan Irwin",
    address: "349 Tennessee Street, San Francisco, CA 94107",
    phone: "(949) 679-1174",
    languages: "English, Spanish",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Doe",
    address: "123 Market St, Los Angeles, CA 90015",
    phone: "(213) 555-7890",
    languages: "English",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Johnson",
    address: "567 Pine St, New York, NY 10001",
    phone: "(718) 555-1234",
    languages: "English, French",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "David Smith",
    address: "890 Elm St, Chicago, IL 60607",
    phone: "(312) 555-4567",
    languages: "English, German",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

export default function AgentList() {
  const [visibleAgents, setVisibleAgents] = useState(5);
  const [loading, setLoading] = useState(false);

  const showMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleAgents((prev) => Math.min(prev + 5, totalResults));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4 sm:p-6">
      <div className="grid gap-6">
        {agents.slice(0, visibleAgents).map((agent, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center border rounded-lg p-4 shadow-md bg-white transition hover:shadow-lg"
          >
            {/* Avatar */}
            <img
              src={agent.image}
              alt={agent.name}
              className="w-20 h-20 rounded-full object-cover mb-3 md:mb-0 md:mr-4"
            />

            {/* Agent Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg">{agent.name}</h3>
              <p className="text-sm text-gray-600">{agent.address}</p>
              <p className="text-sm text-gray-600">{agent.phone}</p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Languages:</span> {agent.languages}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-2 mt-3 md:mt-0">
              <button className="flex items-center text-blue-500 text-sm hover:underline">
                <img src={MapIcon} alt="Map Icon" className="w-5 h-5 mr-1" />
                Get directions
              </button>
              <button className="flex items-center text-blue-500 text-sm hover:underline">
                <img src={ShareIcon} alt="Share Icon" className="w-5 h-5 mr-1" />
                Email agent
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center my-4">
        <p className="text-gray-500 text-sm">
          Showing {Math.min(visibleAgents, totalResults)} of {totalResults} results
        </p>
        {visibleAgents < totalResults && (
          <button
            onClick={showMore}
            className="bg-blue-500 text-white px-6 py-2 rounded-md mt-1 hover:bg-blue-600 transition flex items-center justify-center mx-auto"
          >
            {loading ? "Loading..." : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}
