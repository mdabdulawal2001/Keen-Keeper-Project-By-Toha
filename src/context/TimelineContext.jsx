import { createContext, useState } from "react";

export const TimelineContext = createContext();


const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  

  const addTimeline = (data) => {
    setTimeline((prev) => [...prev, data]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;