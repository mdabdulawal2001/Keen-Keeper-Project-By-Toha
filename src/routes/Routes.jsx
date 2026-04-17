import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TimelineItem from "../components/TimelineItem/TimelineItem";
import StatsCard from "../components/StatsCard/StatsCard";
import Home from "../pages/Home/Home";
import FriendDetails from "../pages/FriendDetails/FriendDetails";
import NotFound from "../pages/NotFound/NotFound";

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
        path: "/friend/:id",
        Component: FriendDetails,
        loader: async ({ params }) => {
          const res = await fetch("/friends.json");
          const data = await res.json();
          return data.find((item) => item.id == params.id);
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
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
