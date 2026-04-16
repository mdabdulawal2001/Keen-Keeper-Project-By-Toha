import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import FriendCard from "../components/FriendCard/FriendCard";
import TimelineItem from "../components/TimelineItem/TimelineItem";
import StatsCard from "../components/StatsCard/StatsCard";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("/friends.json");
          return res.json();
        },
      },
      {
        path: "time-line-item",
        Component: TimelineItem,
      },
      {
        path: "stats",
        Component: StatsCard,
      },
    ],
  },
]);