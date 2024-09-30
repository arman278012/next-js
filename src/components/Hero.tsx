"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [showNormalImage, setShowNormalImage] = useState(false);

  useEffect(() => {
    // Set up an interval to toggle between normal and blurred images
    const interval = setInterval(() => {
      setShowNormalImage((prevState) => !prevState); // Toggle the image state
    }, 4000); // Set the interval duration (4 seconds here)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <>
      <div className="relative bg-black p-8 flex justify-center items-center">
        <div className="w-[80%]">
          <div>
            <a
              href="/Launch_AV_03ef161717.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                className="h-full w-full opacity-1 transition ease-in duration-500 object-contain"
                src="/Launch_AV_03ef161717.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>

              {/* Play icon overlay */}
              <img
                className="cursor-pointer z-10 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                src="https://s3.ap-south-1.amazonaws.com/x-docket.360.one/play_Icon_3094ef1eb9.svg"
                alt="play-icon"
                height="60"
                width="60"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto p-10 bg-black text-white -translate-y-[60px]">
        <div className="flex justify-center gap-10 items-center">
          <div className="left w-[35%]">
            <p className="font-bold text-[30px]">
              IIFL Wealth & Asset Management is now 360 ONE.
            </p>
          </div>
          <div className="middle w-[1px] h-[130px] bg-white"></div>
          <div className="right w-[65%] leading-7">
            <p>
              Our new 360 ONE brand is a reinforcement of what we have always
              delivered to our clients. As India’s leading wealth and
              alternates-focused asset firm, we have around US$ 63 billion
              assets under management and help more than 7,400 HNI and ultra-HNI
              families, manage, grow and preserve their wealth and legacy.
            </p>
          </div>
        </div>
      </div>

      {/* Commitment section */}
      <div className="w-[80%] mx-auto">
        <p className="font-semibold text-3xl">The 360 ONE Commitment</p>
        <p className="mt-5 text-gray-500 text-md tracking-wider">
          Our new name states our approach to service. 360 denotes the holistic
          view we take of the ONE person whose interests are always first: Our
          Client. It is manifested through our purpose: Performance Plus.
        </p>

        <div className="relative mt-2">
          {/* Blurred Image */}
          <img
            src="/blurredMen.png"
            alt="Blurred"
            className={`w-full h-auto transition-opacity duration-1000 ease-in-out absolute top-0 left-0 ${
              showNormalImage ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Normal Image */}
          <img
            src="/normalMen.png"
            alt="Normal"
            className={`w-full h-auto transition-opacity duration-1000 ease-in-out absolute top-0 left-0 ${
              showNormalImage ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
