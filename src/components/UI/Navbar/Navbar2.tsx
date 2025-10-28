// import { HiMiniLanguage } from "react-icons/hi2";
import "./Navbar.css";
import logo from "/icons/icon.png";
import search_icon from "/assets/search_icon.svg"
import notification_icon from "/assets/bell_icon.svg"

import profile_icon from '/assets/profile_img.png'
import dropdown_icon from '/assets/caret_icon.svg'

// import Button from "../Button/Button";

const Navbar2 = () => {
  return (
    <div className="fixed w-full z-50 px-[4%] py-1.5 flex items-center justify-between ">

      <div className="flex items-center gap-5">
        <img src={logo} className="w-30 sm:w-40 md:w-50" alt="logo" />
         <ul className="flex gap-5 cursor-pointer">
            <li>Home</li>
            <li>TV shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
      </div>

      <div className="flex gap-5">
       <img src={search_icon} alt="search" />
       <p>Children</p>
       <img src={notification_icon} alt="search" />
       <img src={profile_icon} alt="search" />
       <img src={dropdown_icon} alt="search" />

      </div>

    </div>
  );
};

export default Navbar2;
