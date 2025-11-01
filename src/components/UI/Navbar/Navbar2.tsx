import { useEffect, useRef, useState } from "react";
import logo from "/icons/icon.png";
import search_icon from "/assets/search_icon.svg";
import notification_icon from "/assets/bell_icon.svg";
import profile_icon from "/assets/profile_img.png";
import dropdown_icon from "/assets/caret_icon.svg";
import { logout } from "../../../firebase";

const Navbar2 = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current?.classList.add("bg-black/90");
      } else {
        navRef.current?.classList.remove("bg-black/90");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed w-full z-50 px-[4%] py-5 flex items-center justify-between 
                 bg-lenear-to-b from-black/80 to-transparent transition-all duration-500"
    >

      <div className="flex items-center gap-5">
        <img src={logo} className="w-20 sm:w-24 md:w-28" alt="logo" />

        <ul className="hidden md:flex gap-5 text-sm lg:text-base cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>

        <button
          className="md:hidden text-white text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <div className="relative flex gap-4 items-center cursor-pointer">
        <img src={search_icon} alt="search" className="w-5 sm:w-6" />
        <p className="hidden sm:block">Children</p>
        <img
          src={notification_icon}
          alt="notification"
          className="w-5 sm:w-6"
        />

        <div className="group relative">
          <div className="flex gap-2 sm:gap-3 items-center">
            <img src={profile_icon} alt="profile" className="w-7 rounded" />
            <img src={dropdown_icon} alt="dropdown" className="w-3" />
          </div>

          <div
            className="absolute invisible group-hover:visible top-[120%] right-0 
             bg-[#191919] px-3 py-1 rounded text-sm z-10 transition-all duration-300 
             whitespace-nowrap"
          >
            <p
              onClick={() => logout()}
              className="hover:bg-red-600 px-3 py-1 rounded cursor-pointer transition-all"
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-black/95 flex flex-col 
                     items-center text-sm py-3 space-y-3 md:hidden"
        >
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
