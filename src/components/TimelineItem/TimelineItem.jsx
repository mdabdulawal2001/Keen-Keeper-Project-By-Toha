import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiOutlineXCircle,
} from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa";

const TimelineItem = () => {
  // আপনার ফাইল থেকে পাওয়া Context এবং ডাটা
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  // আইকন এবং কালার ডাইনামিকালি সেট করার জন্য একটি হেল্পার ফাংশন
  const getActionDetails = (action) => {
    switch (action?.toLowerCase()) {
      case "meetup":
        return { icon: <FaHandshake />, color: "text-amber-500" };
      case "text":
        return {
          icon: <HiOutlineChatBubbleLeftRight />,
          color: "text-gray-400",
        };
      case "video":
        return { icon: <HiOutlineVideoCamera />, color: "text-gray-500" };
      case "call":
        return { icon: <HiOutlinePhone />, color: "text-gray-600" };
      default:
        return { icon: <FaHandshake />, color: "text-blue-500" };
    }
  };
  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.action?.toLowerCase() === filter);

  return (
    <section className="bg-[#f7fdfb] py-10 px-4 md:px-10 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* হেডিং */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Timeline</h1>

        {/* ফিল্টার ড্রপডাউন (Static Design) */}
        <div className="w-full max-w-[200px] mb-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
            className="select select-bordered select-sm w-full bg-white text-gray-500 border-gray-200 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>
        </div>

        {/* কন্টেন্ট এরিয়া */}
        <div className="flex flex-col gap-4">
          {/* ১. ড্যাটা না থাকলে এই মেসেজটি দেখাবে */}
          {!timeline || timeline.length === 0 ? (
            <div className="bg-white p-16 rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
              <HiOutlineXCircle className="text-6xl text-gray-200 mb-4" />
              <h3 className="text-xl font-semibold text-gray-400">
                No History Yet
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                When you interact with friends, your history will appear here.
              </p>
            </div>
          ) : (
            /* ২. ড্যাটা থাকলে লিস্টটি রেন্ডার হবে */
            filteredTimeline.map((item) => {
              const { icon, color } = getActionDetails(item.action);
              return (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-5">
                    {/* ডাইনামিক আইকন */}
                    <div className={`text-3xl ${color}`}>{icon}</div>

                    {/* ডাইনামিক টেক্সট */}
                    <div>
                      <p className="text-gray-600 font-medium">
                        <span className="font-bold text-gray-800">
                          {item.action}
                        </span>{" "}
                        with {item.name}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineItem;
