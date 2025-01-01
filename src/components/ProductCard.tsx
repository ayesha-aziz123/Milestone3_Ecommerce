"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { CiHeart, CiStar } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/Hooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  sale: boolean | undefined;
  quantity:number
}

function ProductCard({ id, img, name, price, sale }: IProduct) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // LocalStorage se Cart Reload karna
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      parsedCart.forEach((item:IProduct) => {
        dispatch(addToCart(item));
      });
    }
  }, [dispatch]);

  const getRating = () => {
    const randomnum = (min: number, max: number) => {
      return Math.ceil(Math.random() * (max - min) + min);
    };

    switch (randomnum(0, 5)) {
      case 0:
        return <div className="flex justify-center text-accent pb-2 pt-4"><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>;
      case 1:
        return <div className="flex justify-center text-accent pb-2 pt-4"><FaStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>;
      case 2:
        return <div className="flex justify-center text-accent pb-2 pt-4"><FaStar /><FaStar /><CiStar /><CiStar /><CiStar /></div>;
      case 3:
        return <div className="flex justify-center text-accent pb-2 pt-4"><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></div>;
      case 4:
        return <div className="flex justify-center text-accent pb-2 pt-4"><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></div>;
      case 5:
        return <div className="flex justify-center text-accent pb-2 pt-4"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>;
      default:
        return <div></div>;
    }
  };

  const addProductCard = (e: React.FormEvent) => {
    e.stopPropagation();
    const payLoad = {
      id,
      name,
      img,
      price,
      quantity: 1,
    };

    // Redux Dispatch
    dispatch(addToCart(payLoad));

    // LocalStorage Update
    const existingCart = localStorage.getItem("cart");
    const updatedCart = existingCart ? JSON.parse(existingCart) : [];
    updatedCart.push(payLoad);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
 toast.success(`${name} added to cart!`);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={() => router.push(`/details/${id}`)}
    >
      <ToastContainer />
      <div className="relative">
        <Image
          className="w-full"
          width={1000}
          height={1142}
          src={img}
          alt={name}
        />
        {sale && (
          <div
            className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white
          rounded-md px-2 py-[2px] m-4"
          >
            SALE!
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
          <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
              <CiHeart className="hover:text-red-500" />
            </div>
            <div
              className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center"
              onClick={addProductCard}
            >
              <AiOutlineShoppingCart className="hover:text-red-700" />
            </div>
          </div>
        </div>
      </div>
      {getRating()}
      <h2 className="font-medium pb-4 hover:text-accent">{name}</h2>
      <p className="text-gray-600 font-light">${price}.00</p>
    </div>
  );
}

export default ProductCard;
