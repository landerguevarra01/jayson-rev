"use client";
import React, { useState, useRef, useEffect } from "react";
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
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (openIndex !== null && refs.current[openIndex]) {
      setTimeout(() => {
        refs.current[openIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [openIndex]);

  const items = [
    {
      id: "01",
      category: "EBC A+",
      image: "/assets/works/amazon_project6.png",
      title: "HAIR VIBRANCE",
      subtitle: "/ VITA MIRACLE",
    },
    {
      id: "02",
      category: "Listing Image",
      image: "/assets/works/amazon_project3.png",
      title: "GOLFLING KIDS PUTTER FOR GOLF",
      subtitle: "GOLFING",
    },
    {
      id: "03",
      category: "Listing Image",
      image: "/assets/works/amazon_project1.png",
      title: "24K GOLDEN UNDER-EYE MASK",
      subtitle: "SKIN CARE CLUB",
    },
    {
      id: "04",
      category: "EBC A+",
      image: "/assets/works/amazon_project7.png",
      title: "THE GENIUS LAB",
      subtitle: "/ KANGO KIDS",
    },
    {
      id: "05",
      category: "Listing Image",
      image: "/assets/works/amazon_project5.png",
      title: "PIZZA PEEL",
      subtitle: "ZLION",
    },
    {
      id: "06",
      category: "Listing Image",
      image: "/assets/works/amazon_project2.png",
      title: "DIGITAL JUMP ROPE",
      subtitle: "JUMPSIO",
    },
    {
      id: "07",
      category: "EBC A+",
      image: "/assets/works/amazon_project8.png",
      title: "MASALA CHAI",
      subtitle: "/ BLUE LOTUS CHAI",
    },
    {
      id: "08",
      category: "Listing Image",
      image: "/assets/works/amazon_project4.png",
      title: "INSECT & MOSQUITO REPELLENT",
      subtitle: "MEDELLA NATURALS",
    },
  ];

  // Function to get different styles per item
  const getItemStyles = (id) => {
    switch (id) {
      case "01":
        return "";
      case "02":
        return "";
      case "03":
        return "";
      case "04":
        return "";
      case "05":
        return "";
      case "06":
        return "";
      case "07":
        return "";
      case "08":
        return "";
      default:
        return "";
    }
  };

  const getFilteredItems = () => {
    if (filter === "ALL") return items;
    return [
      ...items.filter((item) => item.category === filter),
      ...items.filter((item) => item.category !== filter),
    ];
  };

  const renderDescription = (id: string) => (
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
            className={`px-4 py-2 rounded-md text-white cursor-pointer ${
              filter === option ? "bg-blue-600" : "bg-gray-600"
            }`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <AnimatePresence>
        <div className="grid grid-cols-2 gap-4">
          {getFilteredItems().map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity:
                  filter !== "ALL" && item.category !== filter ? 0.25 : 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[360px] flex items-center justify-center transition-opacity  ${getItemStyles(
                item.id
              )}`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border:
                  filter !== "ALL" && item.category === filter
                    ? "2px solid #6a6a6a"
                    : "",
              }}
            >
              <div
                className="absolute inset-0 rounded-lg opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(106, 106, 106, 0.8), rgba(106, 106, 106, 0) 70%)",
                }}
              ></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-lg">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="flex flex-col xl:w-[1207px] max-w-[1207px]">
      <div>
        <h1 className="text-[80px]">
          FEATURED{" "}
          <span className="text-[#DB0102] font-bold italic">Works</span>
        </h1>
      </div>
      <div>
        <p className="text-[25px]">
          Let's make your brand the star of the show. Check out my works to{" "}
          <br />
          see the fun unfold, and let's create something spectacular together!
        </p>
      </div>
      <div className="divider" />
      {works.map((work, index) => (
        <div key={work.id} ref={(el) => (refs.current[index] = el)}>
          <div
            className="flex flex-row items-center gap-12 cursor-pointer hover:scale-105 transform transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <h1 className="text-[80px] font-bold italic">{work.id}</h1>
            <h1 className="text-[80px]">{work.title}</h1>
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
                <div className="mt-4">{renderDescription(work.id)}</div>
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
