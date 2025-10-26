
import { FaArrowRight } from "react-icons/fa";
import "../App.css";
import Button from "./UI/Button";

export const Header = () => {
  return (
    <>
      
      <div className="w-full text-white">


        <section
          className="relative h-screen flex flex-col items-center justify-center bg-center bg-cover gap-4"
          style={{ backgroundImage: "url('/image/10005.jpg')" }}
        >

          <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/70 to-black/90"></div>

          <div className="z-10 text-center">
            
            <h1 className="text-7xl font-bold ">
              Unlimited movies, TV <span className="block">shows and more</span>{" "}
            </h1>
            <h2 className="text-2xl font-bold">
              Starts at ₹149. Cancel at any time.
            </h2>
            <h2>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>
            <div className="flex gap-3">
              <input type="text" placeholder="Email Address" className="p-3 " />
              <Button name={`Get Started`} color={'text-white bg-red-600 rounded'} icon={<FaArrowRight />}/>
            </div>
            
            
          </div>
        </section>

        <section className="relative h-screen flex items-center justify-center bg-center bg-cover">
          {/* <div className='absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90'></div> */}
        </section>
      </div>
    </>
  );
};
