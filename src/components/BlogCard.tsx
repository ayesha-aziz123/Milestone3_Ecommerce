import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  comment: number;
  date: string;
}

function BlogCard({ img, title, comment, date }: propsType) {
  return (
    <div className="space-y-4">
      <Image
      width={1000}
      height={1000}
        className="rounded-lg hover:scale-105 transition-transform"
        alt="post"
        src={img}
      />

      <div className="text-accent font-medium">
        <span>{date} / </span>
        <span>{comment} Comments </span>
      </div>
      <h3 className="font-bold lg:text-[20px] text-xs">{title} </h3>
    </div>
  );
}

export default BlogCard;
