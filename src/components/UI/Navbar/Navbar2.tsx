// import { HiMiniLanguage } from "react-icons/hi2";
import logo from "/icons/icon.png";
import search_icon from "/assets/search_icon.svg";
import notification_icon from "/assets/bell_icon.svg";

import profile_icon from "/assets/profile_img.png";
import dropdown_icon from "/assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logout } from "../../../firebase";

// import Button from "../Button/Button";

const Navbar2 = () => {

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current?.classList.add('bg-black/90')
      }else{
        navRef.current?.classList.remove('bg-black/90')
      }
    })
  },[])

  return (
    <div ref={navRef} className="fixed w-full z-50 px-[4%] py-1.5 flex items-center justify-between bg-linear-to-b from-black/80 to-transparent ">
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

      <div className="relative flex gap-5 items-center cursor-pointer">
        <img src={search_icon} alt="search" />
        <p>Children</p>
        <img src={notification_icon} alt="search" />

        <div className="group">

          <div className="flex gap-5">
            <img src={profile_icon} alt="profile" className="rounded" />
            <img src={dropdown_icon} alt="dropdown"/>
          </div>

          <div className="absolute invisible top-[130%] right-0 bg-[#191919] p-2 rounded z-10 transition-all duration-300 
                   hover:bg-red-700 hover:scale-105 group-hover:visible" >
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar2;
