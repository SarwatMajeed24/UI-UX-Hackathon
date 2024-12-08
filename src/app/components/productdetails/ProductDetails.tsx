import React from "react";
import Image from "next/image";


export const ProductDetailComponent = () => {
  return (
    <div className="font-Satoshi w-[90%] mx-auto mt-8">
      {/* Breadcrumb Section */}
      <div className="max-w-[1440px] flex items-center mb-8">
        {/* <Breadcrumb text="Home" />
        <Breadcrumb text="Shop" />
        <Breadcrumb text="Men's" /> */}
        <span className="text-sm text-gray-700">T-shirts</span>
        
      </div>
      

      {/* Main Content Section */}
      <div className="flex justify-between items-start gap-10">
        {/* Left Column: Product Images */}
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <Image
                src="/images/product detail page/image 2.png" // Replace with your image path
                alt="Thumbnail 1"
                width={500}
                height={500}
                className="w-[152px] h-[168px] border rounded-md cursor-pointer"
              />
              <Image
                src="/images/product detail page/image 2.png" // Replace with your image path
                alt="Thumbnail 2"
                width={500}
                height={500}
                className="w-[152px] h-[168px] border rounded-md cursor-pointer"
              />
              <Image
                src="/images/product detail page/image 6.png" // Replace with your image path
                alt="Thumbnail 3"
                width={500}
                height={500}
                className="w-[152px] h-[168px] border rounded-md cursor-pointer"
              />
            </div>
            <Image
              src="/images/product detail page/image 1.png" // Replace with your main image path
              alt="Main Product"
              width={500}
                height={500}
              className="w-full h-auto rounded-md border"
            />
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="ml-2 text-sm text-gray-500">4.6/5</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-900">$260</span>
            <span className="line-through text-gray-500 ml-4">$300</span>
            <span className="text-red-600 font-bold ml-4">-40%</span>
          </div>
          <p className="text-sm text-gray-700 mb-6">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Select Colors
            </h3>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-green-700 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-blue-900 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Choose Size
            </h3>
            <div className="flex gap-2 ">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-3xl w-[420px] h-[46px] hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-3xl w-[170px] h-[52px]">
              <button className="px-4 py-2 border-3xl">-</button>
              <span className="px-4">1</span>
              <button className="px-4 py-2 border-3xl">+</button>
            </div>
            <button className="w-[400px] h-[52px] px-6 py-3 bg-black text-white rounded-3xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};


