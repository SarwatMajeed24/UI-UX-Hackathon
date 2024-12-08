import React from "react";
import { FaAngleRight } from "react-icons/fa";

export const FilterSidebar = () => {
  return (
    <div className="w-[295px] h-[1220px] border-2 border-gray-200 p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      <ul>
        <li className="flex justify-between items-center hover:underline cursor-pointer">
          TShirts <FaAngleRight />
        </li>
        <li className="flex justify-between items-center hover:underline cursor-pointer">
          Shorts <FaAngleRight />
        </li>
        <li className="flex justify-between items-center hover:underline cursor-pointer">
          Shirts <FaAngleRight />
        </li>
        <li className="flex justify-between items-center hover:underline cursor-pointer">
          Hoodie <FaAngleRight />
        </li>
        <li className="flex justify-between items-center hover:underline cursor-pointer">
          Jeans <FaAngleRight />
        </li>
      </ul>

      {/* Filter Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price</h4>
        <input type="range" min="0" max="500" className="w-full" />
        <div className="flex justify-between text-sm mt-2">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Colors</h4>
        <div className="flex gap-2 flex-wrap">
          {["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"].map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border border-gray-300 px-4 py-1 rounded-md text-sm"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Dress Style</h4>
        <ul className="space-y-2 text-sm">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <li
              key={style}
              className="flex items-center justify-between hover:underline cursor-pointer"
            >
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {style}
              </label>
              <FaAngleRight className="text-gray-500" />
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-black text-white py-2 rounded-md">
        Apply Filter
      </button>
    </div>
  );
};
