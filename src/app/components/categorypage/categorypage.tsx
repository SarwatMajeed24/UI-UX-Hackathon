import React from "react";
import Image from "next/image";

const DressStyle = () => {
  return (
    <div className="w-[90%] max-w-[1440px] h-auto mx-auto mt-12 bg-[#F0F0F0] rounded-2xl p-8 lg:p-14">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[57.6px] my-12">
          BROWSE DRESS BY
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {/* First Image */}
        <div className="relative w-full h-[289px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/style1.png"
            alt="Dress Style 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Second Image */}
        <div className="relative w-full h-[289px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/style2.png"
            alt="Dress Style 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Third Image */}
        <div className="relative w-full h-[289px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/style3.png"
            alt="Dress Style 3"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Fourth Image */}
        <div className="relative w-full h-[289px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/style4.png"
            alt="Dress Style 4"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
