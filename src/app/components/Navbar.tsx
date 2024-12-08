"use client";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-4 mx-auto max-w-[1240px] relative">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-black whitespace-nowrap">
        SHOP.CO
      </h1>

      {/* Toggle Button for Small and Medium Devices */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row absolute md:static top-16 left-1/2 transform md:translate-x-0 -translate-x-1/2 w-[90%] md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none md:flex items-center space-y-4 md:space-y-0 md:space-x-8 p-6 md:p-0 rounded-lg z-20`}
      >
        <Link
          href="#"
          className="text-slate-600 hover:text-black flex items-center"
        >
          Shop
          <RiArrowDropDownLine className="ml-2 text-xl" />
        </Link>
        <Link
          href="#"
          className="text-slate-600 hover:text-black whitespace-nowrap"
        >
          On Sale
        </Link>
        <Link
          href="NewArrivals"
          className="text-slate-600 hover:text-black whitespace-nowrap"
        >
          New Arrivals
        </Link>
        <Link href="#" className="text-slate-600 hover:text-black">
          Brands
        </Link>
      </nav>

      {/* Icons Section */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Search Input */}
        <div className="hidden lg:flex items-center bg-slate-100 rounded-full w-[300px] lg:w-[577px] px-3 py-2">
          <IoSearchOutline />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-slate-100 outline-none px-2"
          />
        </div>
        {/* Shopping Cart */}
        <LuShoppingCart className="text-xl" />
        {/* Account Icon */}
        <VscAccount className="ml-2 text-xl w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default Navbar;
