import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
    document.body.style.overflow = "hidden"; // Prevent body scroll when menu is open
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
    document.body.style.overflow = "auto"; // Restore body scroll
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden overflow-hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] min-h-[80px] h-auto py-4 flex items-center justify-between z-50 bg-white/50 backdrop-blur-sm dark:bg-darkTheme/50 ${
          isScroll
            ? "shadow-sm dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center">
          {/* TODO: */}
          {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 alt="" cursor-pointer mr-14'/> */}
          <span
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } font-semibold text-2xl font-Roboto`}
          >
            Panayappan
          </span>
          <span className="w-2 h-2 sm:w-2.4 sm:h-2.4 bg-[#EB2F64] rounded-full ml-1 mt-[11%]"></span>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 hover:bg-[#EB2F64] hover:text-white hover:border-transparent transition-all"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white overflow-y-auto"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo hover:text-[#EB2F64] transition-colors" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
