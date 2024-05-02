import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Component/Home";
import Button from "./Component/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Button />,
  },

  {
    path: "/home",
    element: <Home />,
  },
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
