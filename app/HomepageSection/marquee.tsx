"use client";
import React from "react";
import Marquee from "react-fast-marquee";

// Reusable Marquee Component
const MarqueeItem = ({ direction, speed, delay, children }) => (
  <Marquee
    delay={delay}
    speed={speed}
    pauseOnHover={true}
    gradient={true}
    gradientColor="#1d1d1d"
    direction={direction}
    className="flex overflow-hidden"
  >
    {children}
  </Marquee>
);

export default function MarqueeText() {
  const marqueeContent = (
    <>
      <div className="flex justify-center items-center">
        <div className="marqueeSquare mx-40" />
        CREATIVE
        <div className="marqueeSquare mx-40" />
        <span
          className=""
          style={{
            fontFamily: "Roxborough CF",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          twist
        </span>
        <div className="marqueeSquare mx-40" />
        REMARKABLE
        <div className="marqueeSquare mx-40" />
        <span
          className=""
          style={{
            fontFamily: "Roxborough CF",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          impacts
        </span>
      </div>
    </>
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          className="text-[260px] flex flex-col justify-center items-center w-full h-[1000px]"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          {/* Reusable Marquee components with different speeds and directions */}
          <MarqueeItem direction="left" delay={3} speed={200}>
            {marqueeContent}
          </MarqueeItem>
          <MarqueeItem direction="right" delay={2} speed={150}>
            {marqueeContent}
          </MarqueeItem>
          <MarqueeItem direction="left" delay={1} speed={100}>
            {marqueeContent}
          </MarqueeItem>
          <MarqueeItem direction="right" speed={100}>
            {marqueeContent}
          </MarqueeItem>
        </div>
      </div>
    </>
  );
}
