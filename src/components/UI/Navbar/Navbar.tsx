import { HiMiniLanguage } from "react-icons/hi2";
import logo from "/icons/icon.png";
import Button from "../Button/Button";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 px-[4%] md:px-[8%] lg:px-[12%] xl:px-[18%] py-1.5 flex items-center justify-between ">
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
            className="outline-none text-center cursor-pointer bg-transparent 
                       sm:appearance-auto sm:w-auto w-4 sm:text-white text-transparent "
          >
            <option className="text-black px-3 textred" value="en" >
              {"English"}
            </option>
            <option className="text-black px-3" value="hi">
              हिन्दी
            </option>
          </select>
        </div>

        <Button fun={Navigate('/login')} name="Sign In" color="bg-red-600" class="rounded px-2" />
      </div>
    </div>
  );
};

export default Navbar;
