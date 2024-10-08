"use client";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    "/banner_bg01.jpg",
    "/banner_bg02.jpg",
    "/banner_bg03.jpg",
    "/banner_bg04.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`p-0 relative bg-cover bg-center transition-all duration-1000 ease-in-out`}
      style={{
        backgroundImage: `url(${banners[currentBanner]})`,
      }}
    >
      <div className="sm:grid px-5 grid-cols-2 min-h-[25rem] sm:min-h-[35rem] text-white bg-black/70 ">
        <div className="flex items-center justify-center min-h-[25rem] sm:min-h-[35rem]   sm:self-center">
          <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold leading-[1]">
            Dive into <span>Movies, TV Shows</span> and More
          </h1>
        </div>
        <div
          className={`hidden sm:inline-table relative bg-cover !w-[80%] my-auto !h-[80%] rounded-xl bg-center transition-all duration-1000 ease-in-out`}
          style={{
            backgroundImage: `url(${banners[currentBanner]})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
