"use client";
import Image from "next/image";
import React, { useState } from "react";

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderDescription = (id: string) => {
    switch (id) {
      case "01":
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              {/* Background Image Card */}
              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>

              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-gray-900 text-white rounded-lg shadow-md relative h-[400px] flex items-center justify-center"
                style={{
                  backgroundImage:
                    "url('/assets/works/24K-Eye-Mask-IMG_3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                {/* Text content positioned in front */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h2 className="text-2xl font-bold">
                    Amazon Listing Optimization
                  </h2>
                  <p className="text-lg">
                    Maximize visibility with well-crafted product listings.
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      case "02":
        return (
          <div className="p-6 border-l-8 border-red-500">
            <h2 className="text-xl font-semibold text-red-600">
              Custom Banners
            </h2>
            <p>Stand out with visually appealing banners for your brand.</p>
          </div>
        );
      case "03":
        return (
          <div className="p-6 bg-blue-50 border border-blue-400 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-600">Booth Design</h2>
            <p>Transform your exhibition space with innovative designs.</p>
          </div>
        );
      case "04":
        return (
          <div className="p-6 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-md">
            <h2 className="text-xl font-bold">Branding Solutions</h2>
            <p>Create a strong and unique brand identity.</p>
          </div>
        );
      case "05":
        return (
          <div className="p-6 flex items-center gap-4 bg-black text-white rounded-lg shadow">
            <div className="w-16 h-16 bg-red-600"></div>
            <div>
              <h2 className="text-xl font-bold">LED Visuals</h2>
              <p>Vibrant and dynamic LED displays to capture attention.</p>
            </div>
          </div>
        );
      case "06":
        return (
          <div className="p-6 bg-white border-l-4 border-gray-500 shadow">
            <h2 className="text-xl font-bold">Social Media Posts</h2>
            <p>Engaging content that resonates with your audience.</p>
          </div>
        );
      case "07":
        return (
          <div className="p-6 bg-gray-800 text-white border-l-4 border-yellow-400 rounded-md">
            <h2 className="text-xl font-bold">Website Design</h2>
            <p>Creating modern and responsive web experiences.</p>
          </div>
        );
      default:
        return null;
    }
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
          {openIndex === index && (
            <div className="accordion-content transform transition-transform ease-in-out duration-500 mt-4">
              {renderDescription(work.id)}
            </div>
          )}
          <div className="divider" />
        </div>
      ))}
    </div>
  );
}

export default Featured;
