import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [theme, setTheme] = useState("garden");

  const handleTheme = (e) => {
    e.target.checked ? setTheme("dim") : setTheme("garden");
  };
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 px-4 shadow-lg sticky top-0 z-10">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-2xl normal-case gap-0 text-secondary font-bold">
          Knight <span className="text-primary">Spark</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold text-lg">
          <li className="text-primary">
            <NavLink to="/" className={({isActive})=> isActive? 'font-bolder' : 'text-secondary'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs"  className={({isActive})=> isActive? 'font-bolder' : 'text-secondary'}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks"  className={({isActive})=> isActive? 'font-bolder' : 'text-secondary'}>Bookmarks</NavLink>
          </li>
        </ul>
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onChange={handleTheme}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nav;
