import { IoIosStar } from "react-icons/io";
import Image from "next/image";

interface data {
  text: string;
  p: string;
  date?: string;
}

export default function Card(props: data) {
  return (
    <div className="w-full sm:w-[610px] h-auto rounded-[20px] border-[1px] border-[#0000001A] bg-white shadow-lg">
      <div className="m-6 pb-4">
        {/* Star Rating */}
        <div className="flex gap-2 text-lg text-[#FFC633] h-[22px] mb-4">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>

        {/* Customer Name and Icon */}
        <div className="flex gap-2 items-center justify-start mb-4">
          <h3 className="text-[20px] leading-[22px] font-bold text-gray-800">{props.text}</h3>
          <Image
            className="rounded-full"
            src={"/images/product detail page/customerright.png"}
            alt={"icon"}
            height={24}
            width={24}
          />
        </div>

        {/* Review Text */}
        <p className="text-[16px] text-[#00000099] text-justify mb-4">{props.p}</p>

        {/* Date Posted */}
        <p className="text-gray-600 text-md font-normal mt-auto">{props.date ? `Posted on ${props.date}` : ''}</p>
      </div>
    </div>
  );
}
