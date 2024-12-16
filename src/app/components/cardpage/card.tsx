import { IoIosStar } from "react-icons/io";
import Image from "next/image";

interface data {
  text: string;
  p: string;
  date?: string;
}

export default function Card(props: data) {
  return (
    <div className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[610px] h-auto rounded-[20px] border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow mx-auto">
      <div className="m-6 pb-4">
        {/* Star Rating */}
        <div className="flex gap-1 text-lg text-[#FFC633] mb-4">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>

        {/* Customer Name and Icon */}
        <div className="flex gap-2 items-center mb-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
            {props.text}
          </h3>
          <Image
            className="rounded-full"
            src={"/images/product detail page/customerright.png"}
            alt={"icon"}
            height={24}
            width={24}
          />
        </div>

        {/* Review Text */}
        <p className="text-sm sm:text-base text-gray-600 text-justify mb-4">
          {props.p}
        </p>

        {/* Date Posted */}
        <p className="text-xs sm:text-sm text-gray-500 mt-auto">
          {props.date ? `Posted on ${props.date}` : ""}
        </p>
      </div>
    </div>
  );
}
