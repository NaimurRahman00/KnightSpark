import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import SingleBlog from "../pages/SingleBlog";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
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
          path: "/blog/:id",
          loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          element: <SingleBlog></SingleBlog>,
          children: [
            {
                index: true,
                element: <Content></Content>
            },
            {
                path: "author",
                element: <Author></Author>
            }
          ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
  ]);