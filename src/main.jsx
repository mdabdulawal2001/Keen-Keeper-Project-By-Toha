import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import "./index.css";
import { RouterProvider } from "react-router-dom";
// @ts-ignore
import { router } from "./routes/Routes";
import TimelineProvider from "./context/TimelineContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router}></RouterProvider>
    </TimelineProvider>
  </StrictMode>
);
