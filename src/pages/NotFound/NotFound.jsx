import React from "react";
import { HiOutlineHome, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen py-15 bg-[#f7fdfb] flex items-center justify-center px-6 font-sans">
        <div className="max-w-2xl w-full text-center">
          {/* icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <h1 className="text-[150px] md:text-[200px] font-black text-gray-100 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <HiOutlineQuestionMarkCircle className="text-6xl md:text-8xl text-[#2D5243] animate-bounce" />
              </div>
            </div>
          </div>

          {/* text */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* btn */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <button className="btn bg-[#2D5243] hover:bg-[#1e3a2f] text-white border-none px-8 h-14 rounded-2xl flex items-center gap-3 transition-all duration-300 hover:shadow-lg normal-case">
                <HiOutlineHome className="text-xl" />
                Back to Homepage
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn bg-white hover:bg-gray-200 text-gray-600 border border-gray-200 px-8 h-14 rounded-2xl transition-all duration-300 normal-case"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
