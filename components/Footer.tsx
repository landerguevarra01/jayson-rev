"use client";
// src/components/Footer.tsx
import Image from "next/image";
import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "BEHANCE", url: "https://www.behance.net/jaysonsanagu2" },
    {
      name: "FACEBOOK",
      url: "https://www.facebook.com/sanagustinjayson.creatives",
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/sanagustinjayson.creatives/",
    },
  ];

  // Get the current date
  const currentDate = new Date();

  // Format the date as MM/DD/YYYY
  const formattedDate = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  return (
    <>
      <div
        className="flex flex-col text-responsiveFoot max-w-[1207px] mb-8"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="2xl:text-[180px] xl:text-[160px] kg:text-[140px] md:text-[120px] sm:text-[100px] text-[80px] order-2 lg:order-1">
              ©2024
            </div>
            <div className="flex flex-col order-1 lg:order-2 text-responsiveNav gap-4 -mt-20">
              <a
                href="mailto:sanagustinjayson.creatives@gmail.com"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                <button
                  className="border-[2px] border-solid rounded-full px-4 hover:bg-[#DB0102] hover:border-[#DB0102]"
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: "bold",
                    fontStyle: "normal",
                  }}
                >
                  sanagustinjayson.creatives@gmail.com
                </button>
              </a>

              <div
                className="flex flex-col lg:flex-row justify-between items-center"
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: "bold",
                  fontStyle: "normal",
                }}
              >
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.url} className="cursor-pointer">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="2xl:text-[180px] xl:text-[160px] kg:text-[140px] md:text-[120px] sm:text-[100px] text-[80px] -mt-10 flex flex-col lg:flex-row justify-center items-center">
            <div>SANSAN</div>
            <div className="hidden lg:block">.</div>
            <div className="-mt-10 lg:-mt-0">GRAPHICS</div>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row justify-between items-center text-responsiveNav"
          style={{
            fontFamily: "Helvetica",
            fontWeight: "normal",
            fontStyle: "normal",
          }}
        >
          <a href="https://www.facebook.com/lander.guevarra.9">
            CODED BY: LANDER GUEVARRA
          </a>
          {
            // This is a single-line comment
          }
          <div>LAST UPDATED: {formattedDate}</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
