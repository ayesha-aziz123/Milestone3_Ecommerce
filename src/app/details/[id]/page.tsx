"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { products } from "@/app/api/products/product";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/redux/features/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PI {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale: boolean;
}

import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState<PI | null>(null);

  useEffect(() => {
    const id = params.id;
    const getProductData = products.filter((item) => item.id.toString() === id)[0];

    setProductData(getProductData);
  }, [params.id]);

  const addProductToCart = () => {
    if (productData) {
      const payload = {
        id: productData.id,
        name: productData.name,
        img: productData.img,
        price: productData.price,
        quantity: 1,
      };
      dispatch(addToCart(payload));

      toast.success(`${productData.name} added to cart!`);
    }
  };

  return (
    <div className="pt-8 ">
      <div className="bg-gray-100 py-4">
      <ToastContainer />
        <div className="container flex gap-4  items-center text-gray-500 ">
          <Link href={"/"} className="cursor-pointer hover:text-accent">
            Home
          </Link>

          <div className="w-[30px] h-[2px] bg-gray-400" />
          <p className="capitalize ">{productData?.category[0]}</p>
          <div className="w-[30px] h-[2px] bg-gray-400 " />
          <p>{productData?.name}</p>
        </div>
      </div>

      <div className="container pt-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Image
              className="w-full h-full"
              src={productData?.img || ''}
              width={1000}
              height={1200}
              alt={productData?.name || 'Product Image'}
            />
          </div>

          <div className="space-y-4 mb-10 ">
            <div className="flex items-center text-accent">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p className="text-gray-700 text-[14px] ml-2 hover:text-accent cursor-pointer ">
                (8 customer reviews)
              </p>
            </div>

            <div className="text-[#161616] space-y-6 ">
              <h2 className="text-3xl font-semibold"> {productData?.name}</h2>
              <p className="text-xl">${productData?.price}.00 </p>
            </div>

            <p className="text-gray-500 text-[14px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              numquam laudantium asperiores quidem quisquam quae error doloribus
              aut ex quam.
            </p>
            <p className="text-gray-600 text-[14px] font-semibold">
              20 in stock
            </p>

            <button  onClick={addProductToCart} className="uppercase bg-accent py-4 px-8  rounded-lg text-white flex gap-2 items-center hover:bg-gray-600">
              <AiOutlineShoppingCart className="text-[24px]" />
              Add to Cart
            </button>

            <div className="flex gap-4 items-center pt-3">
              <div className="flex gap-1 items-center">
                <AiOutlineHeart />
                Add to Wish List
              </div>
              <div className="flex gap-1 items-center">
                <MdCompareArrows />
                Compare
              </div>
            </div>

            {/* items link icon */}
            <div className="w-[30px] h-[2px] bg-gray-400" />
            <div>Name: {productData?.name} </div>
            <div className="capitalize">
              Category: {productData?.category[0]}
            </div>

            <div className="flex gap-1 items-center capitalize">
              Tags:{" "}
              {productData?.category.map((item: string) => (
                <div key={item}>{item} </div>
              ))}
            </div>
            <div className="w-[30px] h-[2px] bg-gray-400" />

            <div className="flex gap-1 items-center">
              SHARE:{" "}
              <div className="flex gap-2 items-center text-[18px]">
                <FaFacebookSquare /> <FaTwitter /> <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
