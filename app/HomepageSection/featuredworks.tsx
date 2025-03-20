"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

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
      link: "/projects/hair-vibrance",
    },
    {
      id: "03",
      category: "Listing Image",
      image: "/assets/works/amazon_project1.png",
      title: "24K GOLDEN UNDER-EYE MASK",
      subtitle: "/ SKIN CARE CLUB",
      link: "/projects/hair-vibrance",
    },
    {
      id: "02",
      category: "Listing Image",
      image: "/assets/works/amazon_project3.png",
      title: "GOLFLING KIDS PUTTER FOR GOLF",
      subtitle: "/ GOLFING",
      link: "/projects/hair-vibrance",
    },
    {
      id: "04",
      category: "EBC A+",
      image: "/assets/works/amazon_project7.png",
      title: "THE GENIUS LAB",
      subtitle: "/ KANGO KIDS",
      link: "/projects/hair-vibrance",
    },
    {
      id: "05",
      category: "Listing Image",
      image: "/assets/works/amazon_project5.png",
      title: "PIZZA PEEL",
      subtitle: "/ ZLION",
      link: "/projects/hair-vibrance",
    },
    {
      id: "06",
      category: "Listing Image",
      image: "/assets/works/amazon_project2.png",
      title: "DIGITAL JUMP ROPE ",
      subtitle: "/ JUMPSIO",
      link: "/projects/hair-vibrance",
    },
    {
      id: "07",
      category: "EBC A+",
      image: "/assets/works/amazon_project8.png",
      title: "MASALA CHAI",
      subtitle: "/ BLUE LOTUS CHAI",
      link: "/projects/hair-vibrance",
    },
    {
      id: "08",
      category: "Listing Image",
      image: "/assets/works/amazon_project4.png",
      title: "INSECT & MOSQUITO REPELLENT",
      subtitle: "/ MEDELLA NATURALS",
      link: "/projects/hair-vibrance",
    },
  ];

  // Function to get different styles per item
  const getItemStyles = (id) => {
    switch (id) {
      case "01":
        return "scale-[122%]";
      case "02":
        return "scale-[119%] mb-[190px]";
      case "03":
        return "scale-[119%] mb-[175px]";
      case "04":
        return "scale-[119%]";
      case "05":
        return "scale-[120%] mt-[70px]";
      case "06":
        return "scale-[119%] mt-[3px]";
      case "07":
        return "scale-[119%] mt-[5px]";
      case "08":
        return "scale-[119.5%] mt-[4px]";
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
            className={`px-4 py-2 rounded-full text-white cursor-pointer uppercase ${
              filter === option ? "bg-[#DB0102]" : "bg-transparent border"
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
              className={`p-6 bg-gray-900 text-white rounded-[25px] overflow-hidden shadow-md relative h-[360px] flex items-center justify-center transition-opacity`}
              style={{
                border:
                  filter !== "ALL" && item.category === filter
                    ? "2px solid #6a6a6a"
                    : "",
              }}
            >
              {/* Image Wrapper */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className={`${getItemStyles(item.id)} object-contain`}
                />
              </div>
              <div
                className="absolute inset-0 rounded-lg opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.813), rgba(106, 106, 106, 0.2) 80%)",
                }}
              ></div>
              <div className="absolute bottom-[100px] left-0 px-[25px]">
                <h2
                  className="text-[60px] font-bold leading-tight text-start"
                  style={{ fontFamily: "Anton, sans-serif" }}
                >
                  {item.title.split("\n").map((line, index, arr) => {
                    // Check if it's the last line to attach the subtitle
                    const isLastLine = index === arr.length - 1;
                    return (
                      <span key={index} className="block leading-[1.2]">
                        {isLastLine ? (
                          <>
                            {line}{" "}
                            <span className="text-[25px] font-normal align-[100%]">
                              {item.subtitle}
                            </span>
                          </>
                        ) : (
                          line
                        )}
                      </span>
                    );
                  })}
                </h2>
              </div>

              <motion.button
                className={`absolute bottom-[25px] gap-2 left-[25px] flex items-center justify-center border rounded-full transition-all duration-300  cursor-pointer ${
                  hoveredButton === item.id
                    ? "w-[209px] h-[65px] bg-[#DB0102] border-[#DB0102]"
                    : "w-[65px] h-[65px]"
                }`}
                onMouseEnter={() => setHoveredButton(item.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <Link href={item.link} passHref>
                  <div className="flex items-center gap-2">
                    <AnimatePresence>
                      {hoveredButton === item.id && (
                        <motion.span
                          className="ml-3 text-white text-[25px] whitespace-nowrap"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{
                            duration: 0,
                            ease: "easeInOut",
                            delay: 0.1,
                          }}
                        >
                          View Work
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.42915 12.5708H22.5708M22.5708 12.5708L12 2M22.5708 12.5708L12 23.1417"
                        stroke="#F5F5F5"
                        strokeWidth="2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.button>
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
            <h1
              className="text-[80px] font-bold"
              style={{
                fontFamily: "Roxborough CF",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {work.id}
            </h1>
            <h1
              className="text-[80px]"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              {work.title}
            </h1>
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
