import { useAppSelector } from "@/redux/Hooks";
import { Whisper } from "next/font/google";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import NavMobile from "./NavMobile";

const whisper = Whisper({ subsets: ["latin"], weight: "400" });
interface NavbarProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
function Navbar({ setShowCart }: NavbarProps) {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className="  backdrop-blur-[20px] bg-[#1e1e1ee2] text-white sticky top-0 z-10 py-4">
      <div className="container flex justify-between items-center">
        <NavMobile />
        <Link
          href={"/"}
          className={`${whisper.className} text-3xl  sm:text-5xl font-semibold sm:hover:text-accent`}
        >
          <h3 className={`${whisper.className} text-[40px]`}>
            Makeup
          </h3>
        </Link>

        <ul className="gap-6 hidden md:flex">
          <Link href={"/"} className="nav-Link">
            Home
          </Link>
          <Link href={"/shop"} className="nav-Link">
            Shop
          </Link>
          <Link href={"/blog"} className="nav-Link">
            Blog
          </Link>

          <Link href={"/contact"} className="nav-Link">
            Contact
          </Link>
        </ul>

        <div className="flex gap-6 text-[26px]">
          <div
            className="relative cursor-pointer "
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px]  grid  place-items-center">
              {cartCount}
            </div>
          </div>
          <IoSearchSharp />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
