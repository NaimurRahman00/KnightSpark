import { Link } from "react-router-dom";
import altImg from "../assets/404.jpg"
const Blog = ({blog}) => {
    const {id, cover_image, description, published_at, title} = blog;
    return (
        <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline hover:shadow-stone-500 hover:shadow-lg transition focus:no-underline bg-gray-900 dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
          src={cover_image || altImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400 dark:text-gray-600">
          {new Date(published_at).toLocaleDateString()}
          </span>
          <p>
            {description}
          </p>
        </div>
      </Link>
    );
};

export default Blog;