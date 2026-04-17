// @ts-ignore
import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const StatsCard = () => {
  const { timeline } = useContext(TimelineContext);

  // data filter
  const callCount =
    // @ts-ignore
    timeline?.filter((item) => item.action.toLowerCase() === "call").length ||
    0;
  const textCount =
    // @ts-ignore
    timeline?.filter((item) => item.action.toLowerCase() === "text").length ||
    0;
  const videoCount =
    // @ts-ignore
    timeline?.filter((item) => item.action.toLowerCase() === "video").length ||
    0;

  // data for chart
  const data = [
    { name: "Call", value: callCount, color: "#244D3F" },
    { name: "Text", value: textCount, color: "#8b5cf6" },
    { name: "Video", value: videoCount, color: "#4ade80" },
  ];

  // check data
  const hasData = callCount > 0 || textCount > 0 || videoCount > 0;

  return (
    <div className="w-[95%] md:w-full max-w-4xl mx-auto mt-15">
      {/* title */}
        <h1 className="flex justify-center md:justify-start text-3xl font-bold text-gray-800 mb-4">
          Friendship Analytics
        </h1>
      <div className="my-8 md:mt-10 md:mb-20 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      {/* header */}
      <div className="mb-8">
        <p className="text-xl text-[#2D5243] font-bold mb-1">
          By Interaction Type
        </p>
      </div>

      <div className="h-75 w-full flex items-center justify-center">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={90}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              {/* tooltip */}
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />

              {/* legend */}
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span className="text-gray-500 text-sm font-medium mr-4">
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-gray-500 text-center italic space-y-4">
            <p className="text-2xl md:text-3xl">No activity data available</p>
            <p className="text-sm md:text-lg">Start interacting to see your analytics</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default StatsCard;
