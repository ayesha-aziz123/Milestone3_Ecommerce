
import React from "react";
import { Whisper } from "next/font/google";

const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });

function Footer() {
  return (
    <div className=" pt-16 h-auto bg-[#1c1b1b] text-[#d1d0d0]">
      <h1 className={`${whisper.className} text-accent text-center md:px-8 md:text-left pb-5 text-4xl`}>Makeup shop</h1>
      <div className="px-3  sm:px-5 md:px-14 flex justify-between gap-10   md:gap-20 flex-col items-start  md:flex-row  md:items-center ">
        <ul className="">
          <h3 className="font-bold pb-3 text-white">Shop All</h3>
          <li>Face</li>
          <li>Eyes</li>
          <li>Cheeks</li>
          <li>Lips</li>
        </ul>
        <ul>
          <h3 className="font-bold pb-3 text-white">About Us</h3>
          <li>About us</li>
          <li>Blog</li>
          <li>Distribution</li>
          <li>Terms of Service</li>
        </ul>
        <ul>
          <h3 className="font-bold pb-3 text-white">Help Us</h3>
          <li>Contact us</li>
          <li>FAQ&apos;s</li>
          <li>Store</li>
          <li>Terms & Condition</li>
        </ul>
        <div className="md:w-[40%]">
          <h3 className="font-semibold text-white pb-3">
            Subscribe to our newsletter
          </h3>
          <input
            type="email"
            placeholder="Enter email here"
            className=" px-2 py-1  sm:px-9 sm:py-2 text-gray-600  rounded-sm mx-2 border-none outline-none text-[17px]"
          />
          <button  className=" border-2 p-[3px] sm:p-[7px] font-semibold   border-white">
            Subscribe
          </button>
          <p className="py-4 text-[14px] text-gray-400">
            By clicking submit, you agree to receive emails from Luscious
            Cosmetics and accept our web terms of use and privacy and cookie
            policy. *Terms apply.
          </p>
        </div>
      </div>

      <p className={`font-thin text-white text-center pt-12 pb-4`}>
        ©2024 Ayesha Cosmetics. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
