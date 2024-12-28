import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  type: string;
  quantity: string;
}

function CategoryCard({ img, type, quantity }: propsType) {
  return (
    <div className="space-y-4">
      <Image
        className="rounded-full border-4 md:border-8 border-white hover:duration-[0.3s] ease-linear cursor-pointer hover:scale-105"
        src={img}
        width={250}
        height={250}
        alt={type}
      />

      <div>
        <h2 className="text-[14px] md:text-xl font-medium">{type}</h2>
        <p className="text-gray-400 text-[12px] md:text-[16px]">{quantity} </p>
      </div>
    </div>
  );
}

export default CategoryCard;
