"use client";
import React, { useState } from "react";
import JaysonLogo from "../../public/assets/homepage/SANSAN_LOGO_1080.png";
import JaysonLogoGIF from "../../public/assets/homepage/JAYSON_ANIMATED.gif";
import Image from "next/image";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(JaysonLogo);

  return (
    <>
      <div className="flex flex-col max-w-[1207px] justify-center items-center">
        <div
          onMouseEnter={() => setImageSrc(JaysonLogoGIF)}
          onMouseLeave={() => setImageSrc(JaysonLogo)}
        >
          <Image src={imageSrc} alt="SanSan Logo" width={200} height={200} />
        </div>
      </div>
      <div>
        <h1>HEY THERE! I’M SANSAN, A</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="w-fit flex justify-center items-center gap-4 border-[#DB0102] border-solid bg-[#DB0102] hover:border-[#B0B0B0] hover:border-solid hover:bg-[white] hover:text-[#DB0102] text-[#1D1D1D] rounded-full px-10">
          GRAPHIC DESIGNER
        </button>
      </div>
      <div
        className=""
        style={{
          fontFamily: "Roxborough CF",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        <h1>Welcome to my creative space!</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <h1>GOT A PROJECT IN MIND?</h1>
        <span>
          <div>
            <button className="w-fit flex flex-row justify-center items-center gap-4 border-[#B0B0B0] border-solid bg-[#B0B0B0] hover:border-[#DB0102] hover:border-solid hover:bg-[white] hover:text-[#B0B0B0] text-[#1D1D1D] rounded-full px-10 ml-4">
              LET’S CHAT
            </button>
          </div>
        </span>
      </div>
    </>
  );
}
