"use client";
import React, { useEffect, useState } from "react";
import { Whisper } from "next/font/google";
import ProductCard, { IProduct } from "./ProductCard";

const whisper = Whisper({ subsets: ["latin"], weight: "400" });

const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];

function NewArrival() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [data, setData] = useState<IProduct[]>([]);
  const [originalData, setOriginalData] = useState<IProduct[]>([]);

  const shuffleArray = (array: IProduct[]): IProduct[] => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        const result: IProduct[] = await response.json();
        setOriginalData(result);
        setData(shuffleArray(result).slice(0, 15));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const handleTab = (index: number) => {
    const category = tabsData[index].toLowerCase();
    setSelectedTab(index);

    if (category === "all") {
      setData(shuffleArray(originalData).slice(0, 15));
      return;
    }

    const filterData = originalData.filter((item) =>
      item.category.includes(category)
    );
    setData(shuffleArray(filterData));
  };

  return (
    <div className="container pt-20">
      <div className="text-center">
        <h3 className={`${whisper.className} animate-bounce text-[40px] text-gray-500`}>
          For your beauty
        </h3>
        <h2 className="font-semibold text-5xl">New Arrival</h2>

        {/* List item filtered */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 font-medium uppercase text-xl">
          {tabsData.map((text, index) => (
            <li
              key={index}
              className={`${selectedTab === index && "text-accent"
                } cursor-pointer hover:text-accent`}
              onClick={() => handleTab(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {data.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale} category={item.category} quantity={0} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
