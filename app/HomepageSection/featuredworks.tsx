"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Featured() {
  const works = [
    { id: "01", title: "AMAZON LISTING" },
    { id: "02", title: "BANNERS" },
    { id: "03", title: "BOOTH DESIGN" },
    { id: "04", title: "BRANDING" },
    { id: "05", title: "LED VISUALS" },
    { id: "06", title: "SOCIAL MEDIA POSTS" },
    { id: "07", title: "WEBSITE DESIGN" },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("ALL");

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderDescription = (id: string) => {
    const items = [
      {
        id: "01",
        category: "Listing Image",
        image: "/assets/works/24K-Eye-Mask-IMG_3.png",
        title: "24K GOLDEN UNDER-EYE MASK",
        subtitle: "SKIN CARE CLUB",
      },
      {
        id: "02",
        category: "EBC A+",
        image: "/assets/works/Image-4.png",
        title: "DIGITAL JUMP ROPE",
        subtitle: "JUMPSIO",
      },
      {
        id: "03",
        category: "Listing Image",
        image: "/assets/works/Listing-ImagesImage-6 1.png",
        title: "GOLFLING KIDS PUTTER FOR GLOF",
        subtitle: "GOLFING",
      },
      {
        id: "04",
        category: "EBC A+",
        image: "/assets/works/MEDELLA-NATURALS-Image-2.png",
        title: "INSECT & MOSQUITO REPELLENT",
        subtitle: "MEDELLA NATURALS",
      },
      {
        id: "05",
        category: "Listing Image",
        image: "/assets/works/Pizza-Peel_Image-3-R3.png",
        title: "PIZZA PEEL",
        subtitle: "ZLION",
      },
    ];

    const filteredItems =
      filter === "ALL"
        ? items
        : items.filter((item) => item.category === filter);

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-6">
          {["ALL", "Listing Image", "EBC A+"].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-md text-white ${
                filter === option ? "bg-blue-600" : "bg-gray-600"
              }`}
              onClick={() => setFilter(option)} // Ensure this updates state
            >
              {option}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-lg">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Fading Gradient Overlay */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "linear-gradient(to top, rgba(10, 10, 10, 1), rgba(0, 0, 255, 0) 60%)",
            pointerEvents: "none",
          }}
        ></div>
      </motion.div>
    );
  };

  return (
    <div
      className="flex flex-col xl:w-[1207px] max-w-[1207px]"
      style={{ fontFamily: "Anton, sans-serif" }}
    >
      <div>
        <h1 className="text-[80px]">
          FEATURED{" "}
          <span
            className="text-[#DB0102]"
            style={{
              fontFamily: "Roxborough CF",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Works
          </span>
        </h1>
      </div>
      <div>
        <p
          className="text-[25px]"
          style={{
            fontFamily: "Helvetica",
            fontWeight: "normal",
            fontStyle: "normal",
          }}
        >
          Let's make your brand the star of the show. Check out my works to{" "}
          <br />
          see the fun unfold, and let's create something spectacular together!
        </p>
      </div>
      <div className="divider" />
      {works.map((work, index) => (
        <div key={work.id}>
          <div
            className="flex flex-row items-center gap-12 cursor-pointer hover:scale-105 transform transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <div
              style={{
                fontFamily: "Roxborough CF",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              <h1 className="text-[80px]">{work.id}</h1>
            </div>
            <div>
              <h1 className="text-[80px]">{work.title}</h1>
            </div>
            <div className="hidden md:flex absolute right-0 -mt-8">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 36.0001L38 4.00012M38 4.00012H6M38 4.00012V36.0001"
                  stroke={openIndex === index ? "#DB0102" : "#F3F3F3"}
                  strokeWidth="8"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="accordion-content transform transition-transform ease-in-out duration-500 mt-4">
                  {renderDescription(work.id)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="divider" />
        </div>
      ))}
    </div>
  );
}

export default Featured;
