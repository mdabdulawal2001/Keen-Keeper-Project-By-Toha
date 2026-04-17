import React from "react";
import { Link } from "react-router-dom";

// @ts-ignore
const FriendCard = ({ friend }) => {
  const { name, picture, status, tags, days_since_contact } = friend;

  // @ts-ignore
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

  return (
    <div>
      <Link to={`/friend/${friend.id}`}>
        <div className="h-90 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center">
          {/* picture */}
          <div className="avatar mb-6">
            <div className="w-24 rounded-full ring-2 ring-[#2D5243]/20 ring-offset-base-100 ring-offset-2">
              <img src={picture} alt={name} />
            </div>
          </div>

          {/* name */}
          <h3 className="text-2xl font-bold text-[#1f2937] mb-2 leading-tight tracking-tight">
            {name}
          </h3>

          {/* last seen */}
          <p className="text-xs font-normal text-gray-400 mb-6 tracking-wide">
            {days_since_contact} <span>d ago</span>
          </p>

          {/* tags badge */}
          <div className="flex gap-2 mb-4 flex-wrap justify-center">
            <div className="badge badge-sm rounded-full bg-[#f0fdf4] text-[#15803d] border-none font-medium px-4 py-3 tracking-wider text-[11px]">
              {tags[0].toUpperCase()}
            </div>
            {tags[1] && (
              <div className="badge badge-sm rounded-full bg-[#f0fdf4] text-[#15803d] border-none font-medium px-4 py-3 tracking-wider text-[11px]">
                {tags[1].toUpperCase()}
              </div>
            )}
          </div>

          {/* status badge */}
          <div
            className={`badge badge-sm rounded-full border-none font-medium px-5 py-3 tracking-wider text-[11px] ${getStatusBadgeColor(
              status
            )}`}
          >
            {status.toUpperCase()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
