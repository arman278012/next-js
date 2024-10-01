"use client";

import React, { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { MdCompassCalibration } from "react-icons/md";

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
      <div className="bg-black p-8 flex justify-center items-center">
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
      <div className="w-[80%] mx-auto mb-10">
        <p className="font-semibold text-3xl">The 360 ONE Commitment</p>
        <p className="mt-5 text-gray-500 text-md tracking-wider">
          Our new name states our approach to service. 360 denotes the holistic
          view we take of the ONE person whose interests are always first: Our
          Client. It is manifested through our purpose: Performance Plus.
        </p>

        {/* Image section */}
        <div className="relative mt-2 w-full">
          {/* Blurred Image */}
          <img
            src="/blurredMen.png"
            alt="Blurred"
            className={`w-full h-auto transition-opacity duration-1000 ease-in-out ${
              showNormalImage ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Normal Image */}
          <img
            src="/normalMen.png"
            alt="Normal"
            className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-1000 ease-in-out ${
              showNormalImage ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Performance-edge section: BELOW the image section */}
      <div className="w-[80%]  mx-auto -translate-y-10">
        <div className="Performance-edge flex gap-10">
          <div className="left w-[40%]">
            <div className="bg-[#C1B6B1] p-10">
              <p className="font-semibold text-3xl">
                The 360 ONE Performance edge
              </p>
              <p className="mt-5 text-black text-md tracking-wider">
                Performance for us is hard, long-term and objectively measured
                by numbers. It is our commitment to our clients, towards
                delivering long-term performance, through ups and downs.
              </p>
            </div>

            <div className="p-10">
              <p className="font-semibold text-3xl">
                The 360 ONE Plus Advantage
              </p>
              <p className="mt-5 text-black text-md tracking-wider">
                Our clients tell us that they deeply value the depth of
                relationships we build with each of them. For us, no two clients
                are alike and hence our solutions are distinct, variable and
                personalized to the needs of each and every client.
              </p>
            </div>
          </div>
          <div className="right w-[60%] p-10">
            <div className="top flex justify-evenly">
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <FaStarOfLife className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Validated track record of delivering results
                  </p>
                </div>
              </div>
              <div className="h-auto w-[1px] bg-black opacity-50"></div>
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <MdCompassCalibration className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Unbiased advice that is centred around client goals
                  </p>
                </div>
              </div>
            </div>
            <div className="line-1 flex justify-between mt-5">
              <div className="h-[1px] w-[230px] bg-black opacity-50"></div>
              <div className="h-[1px]  w-[270px] bg-black opacity-50"></div>
            </div>
            <div className="2nd-top flex justify-evenly m mt-5">
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <FaStarOfLife className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Validated track record of delivering results
                  </p>
                </div>
              </div>
              <div className="h-auto w-[1px] bg-black opacity-50"></div>
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <MdCompassCalibration className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Unbiased advice that is centred around client goals
                  </p>
                </div>
              </div>
            </div>
            <div className="line-2 w-full bg-black h-[1px] mt-5 opacity-50"></div>
            <div className="3rd-top flex justify-between mt-5">
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <FaStarOfLife className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Validated track record of delivering results
                  </p>
                </div>
              </div>
              <div className="h-auto w-[1px] bg-black opacity-50"></div>
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <MdCompassCalibration className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Unbiased advice that is centred around client goals
                  </p>
                </div>
              </div>
            </div>
            <div className="line-1 flex justify-between mt-5">
              <div className="h-[1px] w-[230px] bg-black opacity-50"></div>
              <div className="h-[1px]  w-[270px] bg-black opacity-50"></div>
            </div>
            <div className="bottom flex justify-between mt-5">
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <FaStarOfLife className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Validated track record of delivering results
                  </p>
                </div>
              </div>
              <div className="h-auto w-[1px] bg-black opacity-50"></div>
              <div className="left flex flex-col justify-center items-center p-5 gap-3">
                <div>
                  <MdCompassCalibration className="text-2xl" />
                </div>
                <div>
                  <p className="text-center">
                    Unbiased advice that is centred around client goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
