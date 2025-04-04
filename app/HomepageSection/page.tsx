"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";

const Hero = lazy(() => import("./herosection"));
const Featured = lazy(() => import("./featuredworks"));
const Remarks = lazy(() => import("./remarks"));

export default function HomePage() {
  // const marqueeContainerRef = useRef(null);

  // useEffect(() => {
  //   const marquees =
  //     marqueeContainerRef.current?.querySelectorAll(".marquee-inner");

  //   marquees.forEach((marquee) => {
  //     const distance = marquee.scrollWidth / 2;

  //     const animation = gsap.fromTo(
  //       marquee,
  //       { x: 0 },
  //       {
  //         x: `-${distance}px`, // Always moves left
  //         duration: 16,
  //         ease: "none",
  //         repeat: -1,
  //       }
  //     );

  //     return () => {
  //       animation.kill();
  //     };
  //   });
  // }, []);

  const marqueeTexts = [
    "CREATIVE • CREATIVE • CREATIVE •",
    "TWIST • TWIST • TWIST •",
    "REMARKABLE • REMARKABLE • REMARKABLE •",
    "IMPACTS! • IMPACTS! • IMPACTS! •",
  ];

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      {/* Uncomment Header if needed */}
      {/* <Header /> */}

      <Suspense fallback={<div>Loading Hero...</div>}>
        <div className="pb-[80px]">
          <Hero />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Featured Works...</div>}>
        <div className="p-[80px]">
          <Featured />
        </div>
      </Suspense>

      {/* <div className="flex flex-col justify-center items-center w-screen overflow-hidden">
        <div className="relative w-full flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[800px] bg-gradient-to-r from-[#1D1D1D] via-transparent to-transparent z-10 pointer-events-none"></div>

          <div className="absolute right-0 top-0 h-full w-[800px] bg-gradient-to-l from-[#1D1D1D] via-transparent to-transparent z-10 pointer-events-none"></div>

          <div
            ref={marqueeContainerRef}
            className="w-screen flex flex-col justify-center items-center bg-transparent overflow-hidden"
          >
            {["CREATIVE", "twist", "REMARKABLE", "impacts!"].map(
              (text, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full py-4"
                >
                  <div className="overflow-hidden w-screen">
                    <div className="marquee flex w-max whitespace-nowrap font-bold text-white">
                      <div className="marquee-inner flex w-max">
                        {[...Array(2)].map((_, i) => (
                          <div key={i} className="flex items-center space-x-4">
                            <span
                              className="text-[160px]"
                              style={{ fontFamily: "Anton, sans-serif" }}
                            >
                              {text}
                            </span>
                            <div className="w-[231px] h-[128px] bg-[#D9D9D9] mx-[100px]"></div>
                            <span
                              className="text-[160px]"
                              style={{ fontFamily: "Anton, sans-serif" }}
                            >
                              {text}
                            </span>
                            <div className="w-[231px] h-[128px] bg-[#D9D9D9] mx-[100px]"></div>
                            <span
                              className="text-[160px]"
                              style={{ fontFamily: "Anton, sans-serif" }}
                            >
                              {text}
                            </span>
                            <div className="w-[231px] h-[128px] bg-[#D9D9D9] mx-[100px]"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center w-[620px] overflow-hidden">
        <Marquee
          speed={20}
          gradient={true}
          gradientColor="#1d1d1d"
          gradientWidth={50}
          direction="left"
          autoFill
        >
          <h1 className="mx-[120px] text-[160px]">CREATIVE</h1>
          <div className="w-[361px] h-[200px] bg-gray-600"></div>
        </Marquee>
        <Marquee
          speed={20}
          gradient={true}
          gradientColor="#1d1d1d"
          gradientWidth={50}
          direction="left"
          autoFill
        >
          <h1 className="mx-[20px] text-[160px]">twist</h1>
          <div className="w-[361px] h-[200px] bg-gray-600"></div>
        </Marquee>
        <Marquee
          speed={20}
          gradient={true}
          gradientColor="#1d1d1d"
          gradientWidth={50}
          direction="left"
          autoFill
        >
          <h1 className="mx-[20px] text-[160px]">REMARKABLE</h1>
          <div className="w-[361px] h-[200px] bg-gray-600"></div>
        </Marquee>
        <Marquee
          speed={20}
          gradient={true}
          gradientColor="#1d1d1d"
          gradientWidth={50}
          direction="left"
          autoFill
        >
          <h1 className="mx-[20px] text-[160px]">impacts!</h1>
          <div className="w-[361px] h-[200px] bg-gray-600"></div>
        </Marquee>
      </div>

      <Suspense fallback={<div>Loading Remarks...</div>}>
        <div className="p-[80px]">
          <Remarks />
        </div>
      </Suspense>

      {/* Uncomment Contact if needed */}
      {/* <Contact /> */}
    </div>
  );
}
