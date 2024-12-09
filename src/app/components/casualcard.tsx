import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

type CasualCardData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const CasualCard = () => {
  const card: CasualCardData[] = [
    
    {
      id: 1,
      image: "/images/product detail page/Cate1.png",
      title: "Gradient Graphic T-Shirt",
      price: "$145",
      priceWas: "",
      rating: 3.5,
    },
    {
      id: 2,
      image: "/images/product detail page/cate2.png",
      title: "Polo with Tipping Details",
      price: "$180",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 3,
      image: "/images/product detail page/cate3.png",
      title: "Black Striped T-shirt",
      price: "$120",
      priceWas: "$150",
      rating: 5.0,
    },
    {
      id: 4,
      image: "/images/product detail page/cate4.png",
      title: "SKINNY FIT JEANS",
      price: "$240",
      priceWas: "$260",
      rating: 3.5,
    },
    {
      id: 5,
      image: "/images/product detail page/cate5.png",
      title: "CHECKERED SHIRT",
      price: "$180",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 6,
      image: "/images/product detail page/cate6.png",
      title: "SLEEVE STRIPED T-SHIRT",
      price: "$130",
      priceWas: "160",
      rating: 4.5,
    },
    {
      id: 7,
      image: "/images/product detail page/cate7.png",
      title: "VERTICAL STRIPED SHIRT",
      price: "$212",
      priceWas: "$232",
      rating: 5.0,
    },
    {
      id: 8,
      image: "/images/product detail page/cate8.png",
      title: "COURAGE GRAPHIC T-SHIRT",
      price: "$145",
      priceWas: "",
      rating: 4.0,
    },
    {
      id: 9,
      image: "/images/product detail page/cate9.png",
      title: "LOOSE FIT BERMUDA SHORTS",
      price: "$80",
      priceWas: "",
      rating: 3.0,
    },
  ];

  // Function to calculate the discount percentage
  const calculateDiscount = (price: string, priceWas: string) => {
    if (priceWas) {
      const discount =
        ((parseFloat(priceWas.replace("$", "")) -
          parseFloat(price.replace("$", ""))) /
          parseFloat(priceWas.replace("$", ""))) *
        100;
      return Math.round(discount);
    }
    return 0;
  };

  return (
    <div>
      {/* Heading */}
      <div className="text-center mt-12 mb-6">
        <h1 className="font-IntegralCF text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[57.6px]">
          Casual
        </h1>
      </div>

      {/* Card Section */}
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto">
        {card.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`${
                      index < Math.round(item.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } text-lg`}
                  />
                ))}
              </div>
              <span className="text-sm">{item.rating}/5</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">{item.price}</span>
              {item.priceWas && (
                <>
                  <span className="text-sm line-through text-gray-500">
                    {item.priceWas}
                  </span>
                  <button className="bg-pink-100 text-red-600 text-xs py-1 px-2 rounded-full">
                    {calculateDiscount(item.price, item.priceWas)}% OFF
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-between items-center mt-8 mb-12 px-12">
        <button className="flex gap-4 justify-between items-center text-lg font-Satoshi font-medium text-black px-6 py-2 border-2 border-gray-200 rounded-xl">
          <FaArrowLeftLong /> Previous
        </button>
        <button className="flex gap-4 justify-between items-center text-lg font-Satoshi font-medium text-black px-6 py-2 border-2 border-gray-200 rounded-xl">
          Next <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default CasualCard;
