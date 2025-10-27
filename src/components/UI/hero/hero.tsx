import { FaArrowRight } from "react-icons/fa";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="w-full text-white">
      <section
        className="relative h-screen flex flex-col items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: "url('/image/10005.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/70 to-black/90"></div>

        <div className="z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-8 font-netflix">
            Unlimited movies, TV <span className="block">shows and more</span>
          </h1>

          <h2 className="mb-2 mx-2 sm:mx-4 md:mb-3  sm:text-lg md:text-2xl md:font-bold ">
            Starts at ₹149. Cancel at any time.
          </h2>

          <h2 className="mb-3 mx-8">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>

          <div className="flex-col sm:flex-row flex items-center justify-center gap-3">
            <input
              type="text"
              placeholder="Email Address"
              className="px-3 py-3 w-100 rounded  border-[0.1px] border-gray-500 mx-9 sm:mx-0"
            />
            <Button
              name={`Get Started`}
              color={"text-white bg-red-600 rounded text-2xl py-2 px-5"}
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
