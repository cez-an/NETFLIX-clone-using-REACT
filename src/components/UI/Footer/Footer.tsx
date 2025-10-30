import React from "react";

const Footer = () => {

  return (
    <div className="px-[10%] py-15">
      <div className="flex gap-3">
        <img src="/assets/instagram_icon.png" className="w-10 h-10" alt="Insta" />
        <img src="/assets/facebook_icon.png" className="w-10 h-10" alt="Facebook" />
        <img src="/assets/twitter_icon.png" className="w-10 h-10" alt="Youtube" />
        <img src="/assets/youtube_icon.png" className="w-10 h-10" alt="Twitter" />
      </div>
      <div className="flex flex-col my-7">
        <ul className="list-none grid grid-cols-4 mb-[30px] gap-[15px]">
            <li>Audio Descrption</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Invester Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Cookie Preference</li>
            <li>Corporate Infromation</li>
            <li>Contact Us</li>
        </ul>
        <p>© &nbsp 1997-2025 Netflix Inc </p>
      </div>
    </div>
  );
};

export default Footer;
