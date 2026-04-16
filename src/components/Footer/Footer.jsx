import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#2D5243] text-white py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* logo part */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            KeenKeeper
          </h2>

          {/* description part */}
          <p className="max-w-2xl text-gray-200 text-sm md:text-base leading-relaxed mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* social link part */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <span className="text-lg font-medium">Social Links</span>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white p-3 rounded-full text-[#2D5243] hover:bg-gray-200 transition-all"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full text-[#2D5243] hover:bg-gray-200 transition-all"
              >
                <FaFacebookSquare size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full text-[#2D5243] hover:bg-gray-200 transition-all"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* copyright part */}
          <div className="w-full border-t border-[#3d6b58] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-300">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
