import { HiMiniLanguage } from "react-icons/hi2";
import "./Navbar.css";
import logo from "/icons/icon.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 px-4  md:px-10 lg:px-30  xl:px-60 py-1.5 flex items-center justify-between ">
      <div>
        <img src={logo} className="w-30 sm:w-40 md:w-50" alt="logo" />
      </div>

      <div className="flex gap-3">
        <div className="flex items-center border rounded px-3 py-1.5 ">
          <span>
            <HiMiniLanguage />
          </span>

          <select
            name="language"
            id=""
            className="outline-none text-center cursor-pointer bg-transparent 
                       sm:appearance-auto sm:w-auto w-4 sm:text-white text-transparent "
          >
            <option className="text-black px-3 textred" value="en" selected>
              {"English"}
            </option>
            <option className="text-black px-3" value="hi">
              हिन्दी
            </option>
          </select>
        </div>
           
        <Button name="Sign In" color="bg-red-600" class="rounded px-2" />
      </div>
    </div>
  );
};

export default Navbar;
