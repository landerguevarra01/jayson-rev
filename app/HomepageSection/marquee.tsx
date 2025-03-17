"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import "../../styles/marquee.css";

// Reusable Marquee Component
const MarqueeItem = ({ direction, speed, delay, children }) => (
  <Marquee
    delay={delay}
    speed={speed}
    pauseOnHover={true}
    gradient={true}
    gradientColor="#1d1d1d"
    direction={direction}
    className="flex w-full justify-center items-center"
  >
    {children}
  </Marquee>
);

export default function MarqueeText() {
  const marqueeContent = (
    <div className="flex justify-center items-center text-center">
      <div className="marqueeSquare mx-20" />
      <h1 className="mx-10">CREATIVE</h1>
      <div className="marqueeSquare mx-20" />
      <span
        className="mx-10"
        style={{
          fontFamily: "Roxborough CF",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        twist
      </span>
      <div className="marqueeSquare mx-20" />
      <h1 className="mx-10">REMARKABLE</h1>
      <div className="marqueeSquare mx-20" />
      <span
        className="mx-10"
        style={{
          fontFamily: "Roxborough CF",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        impacts
      </span>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        className="text-[200px] flex flex-col justify-center items-center w-full"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        {/* Centered Marquee components */}
        <MarqueeItem direction="left" delay={4} speed={200}>
          {marqueeContent}
        </MarqueeItem>
        <MarqueeItem direction="right" delay={3} speed={150}>
          {marqueeContent}
        </MarqueeItem>
        <MarqueeItem direction="left" delay={2} speed={100}>
          {marqueeContent}
        </MarqueeItem>
        <MarqueeItem direction="right" delay={1} speed={100}>
          {marqueeContent}
        </MarqueeItem>
      </div>
    </div>
  );
}
