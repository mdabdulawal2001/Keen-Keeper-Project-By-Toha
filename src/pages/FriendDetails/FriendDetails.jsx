import React from "react";
import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineBell,
  HiOutlinePhone,
  HiOutlineTrash,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import {
  HiOutlineArchiveBox,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const { addTimeline } = useContext(TimelineContext);
  
  const navigate = useNavigate();

  const FriendDetailsData = useLoaderData();

  const {
    picture,
    name,
    status,
    tags,
    bio,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = FriendDetailsData;

  const getStatusBadgeColor = (statusText) => {
    switch (statusText.toLowerCase()) {
      case "overdue":
        return "bg-[#dc2626] text-white"; // Red
      case "almost due":
        return "bg-[#f59e0b] text-white"; // Amber/Orange
      case "on-track":
        return "bg-[#15803d] text-white"; // Green
      default:
        return "bg-gray-100 text-gray-700"; // Default
    }
  };

  const handleAction = (type) => {
  console.log(type);
  const newData = {
    name,
    action: type,
    date: new Date().toLocaleDateString(),
  };

  addTimeline(newData);
  navigate("/time-line-item");
};

  return (
    <div>
      <div className="bg-[#f7fdfb] min-h-screen py-10 px-4 md:px-10 font-sans">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-8">
          {/* --- Left Column: Profile & Actions --- */}
          <div className="w-full lg:w-[350px] flex flex-col justify-between gap-6">
            {/* Profile Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full">
                  <img src={picture} alt={name} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

              {/* status badge */}
              <div
                className={`badge badge-sm rounded-full border-none font-medium px-5 py-3 tracking-wider text-[11px] mt-2 ${getStatusBadgeColor(
                  status
                )}`}
              >
                {status.toUpperCase()}
              </div>

              {/* tags badge */}
              <div className="flex gap-2 mt-4 flex-wrap justify-center">
                <div className="badge badge-sm rounded-full bg-[#f0fdf4] text-[#15803d] border-none font-medium px-4 py-3 tracking-wider text-[11px]">
                  {tags[0]?.toUpperCase()}
                </div>
                {tags[1] && (
                  <div className="badge badge-sm rounded-full bg-[#f0fdf4] text-[#15803d] border-none font-medium px-4 py-3 tracking-wider text-[11px]">
                    {tags[1].toUpperCase()}
                  </div>
                )}
              </div>

              <p className="text-gray-500 text-sm mt-4 italic">{bio}</p>
              <p className="text-gray-400 text-xs mt-auto pt-4 font-medium">
                Preferred: {email}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="btn bg-white hover:bg-gray-50 border border-gray-100 text-gray-700 rounded-2xl normal-case h-14 flex justify-center items-center gap-3">
                <HiOutlineBell className="text-xl" /> Snooze 2 Weeks
              </button>
              <button className="btn bg-white hover:bg-gray-50 border border-gray-100 text-gray-700 rounded-2xl normal-case h-14 flex justify-center items-center gap-3">
                <HiOutlineArchiveBox className="text-xl" /> Archive
              </button>
              <button className="btn bg-white hover:bg-red-50 border border-gray-100 text-red-500 rounded-2xl normal-case h-14 flex justify-center items-center gap-3">
                <HiOutlineTrash className="text-xl" /> Delete
              </button>
            </div>
          </div>

          {/* --- Right Column: Stats & Goals --- */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Top Stat Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h1 className="text-4xl font-bold text-gray-800">
                  {days_since_contact}
                </h1>
                <p className="text-gray-400 text-xs mt-2 font-semibold">
                  Days Since Contact
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h1 className="text-4xl font-bold text-gray-800">{goal}</h1>
                <p className="text-gray-400 text-xs mt-2 font-semibold">
                  Goal (Days)
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h1 className="text-[27px] font-bold text-gray-800 py-3">
                  {next_due_date}
                </h1>
                <p className="text-gray-400 text-xs mt-1 font-semibold">
                  Next Due
                </p>
              </div>
            </div>

            {/* Relationship Goal Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#2D5243]">
                  Relationship Goal
                </h3>
                <button className="btn btn-sm bg-gray-50 border border-gray-100 text-gray-600 rounded-lg hover:bg-gray-100 normal-case">
                  <HiOutlinePencilSquare className="text-lg" /> Edit
                </button>
              </div>
              <p className="text-gray-600">
                Connect every{" "}
                <span className="font-bold text-gray-800">30 days</span>
              </p>
            </div>

            {/* Quick Check-In Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
              <h3 className="text-lg font-bold text-[#2D5243] mb-6">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button onClick={()=> handleAction("call")} className="btn bg-[#f8fafc] hover:bg-gray-100 border-none rounded-2xl h-24 flex flex-col gap-2 normal-case">
                  <HiOutlinePhone className="text-3xl text-gray-600" />
                  <span className="text-gray-700">Call</span>
                </button>
                <button onClick={()=> handleAction("text")} className="btn bg-[#f8fafc] hover:bg-gray-100 border-none rounded-2xl h-24 flex flex-col gap-2 normal-case">
                  <HiOutlineChatBubbleLeftRight className="text-3xl text-gray-600" />
                  <span className="text-gray-700">Text</span>
                </button>
                <button onClick={()=> handleAction("video")} className="btn bg-[#f8fafc] hover:bg-gray-100 border-none rounded-2xl h-24 flex flex-col gap-2 normal-case">
                  <HiOutlineVideoCamera className="text-3xl text-gray-600" />
                  <span className="text-gray-700">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
