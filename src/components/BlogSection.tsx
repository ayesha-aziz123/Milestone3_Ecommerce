import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "/post__1.jpg",
    title: "lorem ipsum dolor sit amet",
    date: "Sep 27 ,2024",
    comment:6,
  },
  {
    img: "/post__2.jpg",
    title: "lorem ipsum dolor sit amet",
    date: "june 19 ,2024",
    comment: 1,
  },
  {
    img: "/post__3.jpg",
    title: "lorem ipsum dolor sit amet",
    date: "Sep 25 ,2024",
    comment: 8,
  },
];

function BlogSection() {
  return (
    <div className="container pt-9 md:pt-32 pb-16">
      <h2 className="font-bold text-4xl">Latest News</h2>
      <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  pt-8">
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
