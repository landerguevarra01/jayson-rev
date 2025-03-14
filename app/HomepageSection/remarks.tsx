"use client";
import React from "react";
import Image from "next/image";
import AboutJayson from "../../public/assets/homepage/AboutJayson.png";
// import { WavingHand } from "@tensaye-o/react-waving-hand";
// import "@tensaye-yuan/react-waving-hand/dist/index.css";

export default function Remarks() {
  return (
    <>
      <div className="">
        <div
          className="flex flex-col lg:flex-row gap-12 justify-center items-center text-[30px] 2xl:text-[80px] xl:text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] max-w-[1207px]"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          <div>
            MEET THE MIND
            <br />
            BEHIND THE{" "}
            <span
              className="text-[#DB0102]"
              style={{
                fontFamily: "Roxborough CF",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Magic
            </span>
            <div
              className="text-responsiveParagraph"
              style={{
                fontFamily: "Helvetica",
                fontWeight: "normal",
                fontStyle: "normal",
              }}
            >
              Hey there!{" "}
              {/* <WavingHand loop={0} motion={true} size="2.5rem" type={3} /> */}
              I'm SanSan, your friendly neighborhood graphic designer with a
              passion for turning pixels into masterpieces. Armed with a
              keyboard in one hand and a paintbrush in the other, I'm on a
              mission to make the world a little more colorful-one design at a
              time.
            </div>
            <button
              className="flex flex-row justify-center items-center text-responsiveParagraph2 w-fit border-solid border-[2px] rounded-full px-8 py-2 gap-4 mt-12 hover:bg-[#DB0102] hover:border-[#DB0102]"
              style={{
                fontFamily: "Helvetica",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              View More
            </button>
          </div>
          <div>
            <Image
              src={AboutJayson}
              alt="SanSan Logo"
              //   width={100}
              //   height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
