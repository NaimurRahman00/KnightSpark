import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
        element: <Blogs></Blogs>,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);