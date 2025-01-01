"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

function NavMobile() {
  const [isMenu, setMenu] = useState(false);

  function toggle() {
    setMenu(!isMenu);
  }

  useEffect(() => {
    const sidebar = document.querySelector(".nav2") as HTMLElement
    if (sidebar) {
      if (isMenu) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [isMenu]);

  return (
    <>
     
      <div onClick={toggle} className="md:hidden  block cursor-pointer">
        <div
          className={`transition-transform text-pink-600 duration-300 ease-linear ${isMenu ? "rotate-90" : "rotate-0"
            }`}
        >
          {isMenu ? (
            <MdOutlineClose size={30} /> // Close Icon
          ) : (
            <MdOutlineMenu size={30} /> // Menu Icon
          )}
        </div>
      </div>
      <div
        className={`nav2 flex sm:hidden fixed top-[65px]  right-0 w-full h-[50vh] 
           backdrop-blur-[20px] bg-[#fffffff3] text-black font-bold z-10  
           transition-transform duration-500 ease-in-out transform
            ${isMenu ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="z-10 flex md:hidden flex-col items-center mt-9 justify-center text-xl gap-y-8 ">
          <Link onClick={toggle} href={"/"} className="nav-Link">
            Home
          </Link>
          <Link onClick={toggle} href={"/shop"} className="nav-Link">
            Shop
          </Link>
          <Link onClick={toggle} href={"/blog"} className="nav-Link">
            Blog
          </Link>

          <Link onClick={toggle} href={"/contact"} className="nav-Link">
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavMobile;
