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
  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  // ICON + COLOR
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

  // DATE FORMAT (Day + Time)
  const formatDate = (dateValue) => {
  const date = new Date(dateValue);
  const now = new Date();

  // remove time part for day comparison
  const d1 = new Date(date.toDateString());
  const d2 = new Date(now.toDateString());

  const diff = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));

  let dayPart = "";

  if (diff === 0) {
    dayPart = "Today";
  } else if (diff === 1) {
    dayPart = "Yesterday";
  } else {
    // weekday + date
    const weekday = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const fullDate = date.toLocaleDateString("en-GB"); 
    // format: DD/MM/YYYY

    dayPart = `${weekday}, ${fullDate}`;
  }

  // time with AM/PM
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dayPart}, ${time}`;
};

  // COPY ARRAY
  let filteredTimeline = [...(timeline || [])];

  // SEARCH FILTER (SAFE)
  filteredTimeline = filteredTimeline.filter((item) =>
    item.name?.toLowerCase().includes(search)
  );

  // ACTION FILTER
  if (filter !== "all") {
    filteredTimeline = filteredTimeline.filter(
      (item) => item.action?.toLowerCase() === filter
    );
  }

  // SORT (FAST & CLEAN)
  filteredTimeline.sort((a, b) =>
    sort === "newest" ? b.date - a.date : a.date - b.date
  );

  return (
    <section className="bg-[#f7fdfb] py-10 px-4 md:px-10 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Timeline
        </h1>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row flex-1 w-full md:w-[50%] gap-3 mb-4">

            <div>
                {/* SEARCH */}
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="input input-bordered w-full h-[40px]"
          />
            </div>

          <div className="flex flex-2 gap-3">
            {/* FILTER */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-[40px] select select-bordered select-sm w-full bg-white"
          >
            <option value="all">All</option>
            <option value="text">Text</option>
            <option value="call">Call</option>
            <option value="video">Video</option>
          </select>

          {/* SORT */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-[40px] select select-bordered select-sm w-full bg-white"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-4">

          {/* EMPTY STATE */}
          {filteredTimeline.length === 0 ? (
            <div className="bg-white p-16 rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
              <HiOutlineXCircle className="text-6xl text-gray-200 mb-4" />
              <h3 className="text-xl font-semibold text-gray-400">
                No History Yet
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                When you interact with friends, history will appear here.
              </p>
            </div>
          ) : (
            filteredTimeline.map((item, index) => {
              const { icon, color } = getActionDetails(item.action);

              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition"
                >
                  <div className="flex items-center gap-5">

                    {/* ICON */}
                    <div className={`text-3xl ${color}`}>
                      {icon}
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-gray-600 font-medium">
                        <span className="font-bold text-gray-800">
                          {item.action}
                        </span>{" "}
                        with {item.name}
                      </p>

                      <p className="text-gray-400 text-xs mt-1">
                        {formatDate(item.date)}
                      </p>
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