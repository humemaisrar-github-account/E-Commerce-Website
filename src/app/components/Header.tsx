import React from "react";
import Link from "next/link";
import { FaCrown } from "react-icons/fa6";

function Header() {
  return (
    <div className="w-full h-[70px] flex justify-center items-center border-b-2">
      <div className="w-[90%] h-full flex justify-between items-center">
        {/* Left Section */}
        <div>
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-950 flex"
            data-aos="fade-down"
          >
            <FaCrown className="pl-1" data-aos="fade-down" /> Rare Collection
          </h1>
        </div>
        {/* Right Section */}
        <div>
          <ul
            className="flex flex-wrap gap-x-3 sm:gap-x-5 md:gap-x-7 text-yellow-950"
            data-aos="fade-down"
          >
            {["Home", "About", "Contact us", "Sign up"].map((text, index) => (
              <li key={index} className="hover:underline text-sm sm:text-base">
                <Link href={"/"}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
