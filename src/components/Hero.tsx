import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative bg-black p-8 flex justify-center items-center">
        <div className="w-[80%]">
          <div>
            {/* Added background and padding */}
            <a
              href="/Launch_AV_03ef161717.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                className="h-full w-full opacity-1 transition ease-in duration-500 object-contain"
                src="/Launch_AV_03ef161717.mp4" // Relative path to the video file in the public folder
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
        </div>{" "}
      </div>

      <div className="w-[80%] mx-auto p-10 bg-black text-white -translate-y-[60px]">
        <div className="flex justify-center gap-10 items-center">
          {/* Left Div: 30% width */}
          <div className="left w-[35%]">
            <p className="font-bold text-[30px]">
              IIFL Wealth & Asset Management is now 360 ONE.
            </p>
          </div>

          {/* Middle Divider: 10% width */}
          <div className="middle w-[1px] h-[130px] bg-white"></div>

          {/* Right Div: 40% width */}
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
    </>
  );
};

export default Hero;
