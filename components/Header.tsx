"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("home"); // Default active link

  useEffect(() => {
    // Set active link based on current pathname
    const currentPage = pathname.split("/")[1] || "home"; // Default to "home" if the path is empty
    setActiveLink(currentPage);
  }, [pathname]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/capabilities", label: "Capabilities", id: "capabilities" },
    { href: "/works", label: "Works", id: "works" },
    { href: "/studio", label: "Studio", id: "studio" },
    { href: "/events", label: "Events", id: "events" },
    { href: "/blink-tv", label: "Blink TV", id: "blink-tv" },
    { href: "/careers", label: "Careers", id: "careers" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container max-w-[1020px] mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            <svg
              width="27"
              height="36"
              viewBox="0 0 27 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.24904 34.5529L0 36V7.35392L5.24904 5.90681V34.5529Z"
                fill="#A30A24"
              />
              <path
                d="M13.1155 11.294V9.74164L26.7183 5.9989V0L7.07715 5.4069V18.9505L26.7183 13.5502V7.55125L13.1155 11.294Z"
                fill="#A30A24"
              />
              <path
                d="M20.6799 24.3113V22.759L7.07715 26.5017V20.5028L26.7183 15.0959V28.6461L7.07715 34.053V28.0541L20.6799 24.3113Z"
                fill="#A30A24"
              />
            </svg>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-10 text-[14px]">
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={id}
              href={href}
              onClick={() => handleLinkClick(id)}
              className={`text-gray-600 hover:text-gray-900 ${
                activeLink === id
                  ? "border-b-4 border-[#A30A24] px-[40px] py-[16px] text-center"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/book-now"
            className="hidden md:block px-[22px] py-[8px] bg-[#A30A24] text-white transform -skew-x-[20deg]"
          >
            <div className="transfrom skew-x-[20deg] font-normal">Book Now</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
