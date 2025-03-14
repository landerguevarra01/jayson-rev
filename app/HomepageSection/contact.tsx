"use client";
import React from "react";

export default function Contact() {
  return (
    <>
      <div
        className="text-[30px] 2xl:text-[80px] xl:text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] flex flex-col lg:flex-row justify-between lg:gap-56 max-w-[1207px] mb-40"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        <div>
          LET'S MAKE THIS
          <br />
          MONOCHROMATIC WORLD
          <br />
          <span
            className="font-normal"
            style={{
              fontFamily: "Roxborough CF",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            a <span className="text-[#DB0102]">colorful one.</span>
          </span>
        </div>
        <div className="text-responsiveParagraph2 flex flex-col justify-center items-center">
          <button
            className="flex flex-row justify-center items-center text-responsiveParagraph2 w-fit border-solid border-[2px] rounded-full mt-20 px-8 py-2 gap-4 hover:bg-[#DB0102] hover:border-[#DB0102]"
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              fontStyle: "normal",
            }}
          >
            Contact
            {/* <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 22L23 2M23 2H3M23 2V22"
                stroke="#F5F5F5"
                stroke-width="3"
                stroke-linecap="square"
              />
            </svg> */}
          </button>
        </div>
      </div>
      <div className="divider max-w-[1207px]" />
    </>
  );
}
