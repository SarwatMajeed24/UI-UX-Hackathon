import React from 'react';
import { DropdownButton } from './dropdown/dropdown';
import { FaAngleRight } from "react-icons/fa6";


export const CategoryTop = () => {
  return (
    <div className="font-Satoshi w-[90%] max-w-[1440px] mx-auto mt-8">
      {/* Breadcrumb Section */}
      <div className="flex flex-wrap justify-start items-center gap-4">
        <DropdownButton textSize={11} textColor="#403c3b" textContent="Home" icon={<FaAngleRight />} />
        <DropdownButton textSize={11} textColor="#403c3b" textContent="Casual" />
      </div>

      {/* Responsive Spacing Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col">{/* Add content if necessary */}</div>
        <div className="flex flex-col">{/* Add content if necessary */}</div>
      </div>
    </div>
  );
};