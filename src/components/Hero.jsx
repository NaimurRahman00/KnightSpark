import { Link } from "react-router-dom";
import wave from "../assets/wave.svg"

const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-128px)] relative bg-base-200">
      <div className="hero-content text-center flex-col">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">KnightSpark</span> </h1>
          <p className="py-6">
            KnightSpark has rides like The Big Wheel, The Paratrooper, Go Karts,
            a golf driving range and 18 hole miniature golf along with a batting
            cage.
          </p>
          <div className="space-x-4">
            <Link
              to="/blogs"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Read Blogs</span>
              </span>
            </Link>
            <Link
             to="/bookmarks"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Bookmarks</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
        <div className="absolute bottom-0 w-full">
            <img src={wave} alt="" className="w-full"/>
        </div>
    </div>
  );
};

export default Hero;
