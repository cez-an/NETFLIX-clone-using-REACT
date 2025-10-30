const Hero = () => {
  return (
    <>
      <section
        className="relative w-full h-screen flex flex-col justify-center bg-center bg-cover bg-no-repeat m-0 p-0 gap-2 "
        style={{ backgroundImage: "url('/image/10001.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black to-transparent "></div>

        <div className="absolute left-20 bottom-15 pr-16 space-y-4">
          <img src="/image/10002.webp" className="" alt="hero_title" />
          <p className="text-lg max-w-3xl">
            An unfathomable incident introduces a genius engineer to dangerous secrets of the world — and to a
             woman from the future who's come looking for him.
          </p>
          <div className="flex gap-5">
            <button className="flex items-center justify-center gap-3 rounded bg-white text-black py-2.5 px-4 cursor-pointer">
              <img src="assets/play_icon.png" className="w-7" alt="" /> Play
            </button>
            <button className="flex items-center justify-center gap-3 rounded bg-gray-500/40 text-white py-2.5 px-4 cursor-pointer">
              <img src="/assets/info_icon.png" className="w-7" alt="" /> More
              Info
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
