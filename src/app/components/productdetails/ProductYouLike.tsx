import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

type TopSellerData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const YouMayLike = () => {
  const card: TopSellerData[] = [
    {
      id: 1,
      image: "/images/product detail page/cate10.png",
      title: "Polo with Contrast Trims",
      price: "$212",
      priceWas: "$242",
      rating: 4.0,
    },
    {
      id: 2,
      image: "/images/product detail page/Cate1.png",
      title: "Gradient Graphic T-shirt",
      price: "$145",
      priceWas: "",
      rating: 3.5,
    },
    {
      id: 3,
      image: "/images/product detail page/cate2.png",
      title: "Polo with Tipping Details",
      price: "$180",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 4,
      image: "/images/product detail page/cate3.png",
      title: "Black Striped T-shirt",
      price: "$120",
      priceWas: "$160",
      rating: 5.0,
    },
  ];

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
    <div className="py-10 w-[90%] mx-auto">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl lg:text-4xl font-extrabold underline underline-offset-4">
          YOU MIGHT ALSO LIKE
        </h1>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {card.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            {/* Image Section */}
            <div className="relative w-full h-[250px] rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mt-4">{item.title}</h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
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
              <span className="text-sm text-gray-600">{item.rating}/5</span>
            </div>

            {/* Price Section */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800">{item.price}</span>
              {item.priceWas && (
                <>
                  <span className="text-sm line-through text-gray-500">
                    {item.priceWas}
                  </span>
                  <span className="bg-red-100 text-red-600 text-xs py-1 px-2 rounded-full">
                    {calculateDiscount(item.price, item.priceWas)}% OFF
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default YouMayLike;