import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import FriendCard from "../components/FriendCard/FriendCard";
import TimelineItem from "../components/TimelineItem/TimelineItem";
import StatsCard from "../components/StatsCard/StatsCard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "time-line-item",
        Component: TimelineItem,
      },
      {
        path: "stats",
        Component: StatsCard,
      }
    ]
  },
]);

