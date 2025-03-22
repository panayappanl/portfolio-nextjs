import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* TODO: */}
        {/* <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        /> */}

        <div className="w-max flex mx-auto mb-2">
          <span
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } font-semibold text-2xl sm:text-3xl font-Roboto`}
          >
            Panayappan
          </span>
          <span className="w-2 h-2 sm:w-2.4 sm:h-2.4 bg-[#EB2F64] rounded-full ml-1 mt-[11%]"></span>
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          <a
            href="mailto:panayappan.tech@gmail.com"
            className="hover:underline"
          >
            panayappan.tech@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {new Date().getFullYear()} Panayappan. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/panayappanl">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/panayappanl">
              LinkedIn
            </a>
          </li>
          {/* <li>
            <a target="_blank" href="https://instagram.com/greatstackdev">
              Twitter
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
