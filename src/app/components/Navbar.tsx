"use client";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center px-4 py-2">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold mr-8">SHOP.CO</h1>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-6 absolute md:relative top-16 left-0 w-full md:w-auto bg-white shadow-lg md:shadow-none md:top-auto z-20 p-4 md:p-0`}
        >
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 flex items-center hover:text-black"
            >
              Shop
              <RiArrowDropDownLine className="ml-1 text-xl" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-[200px]">
                <Link href="/productdetail" className="block px-4 py-2">
                  Product Details
                </Link>
                <Link href="/categorypage" className="block px-4 py-2">
                  Category Page
                </Link>
                <Link href="/cart" className="block px-4 py-2">
                  Cart
                </Link>
              </div>
            )}
          </div>
          <Link href="#" className="hover:text-black">
            On Sale
          </Link>
          <Link href="NewArrivals" className="hover:text-black">
            New Arrivals
          </Link>
          <Link href="#" className="hover:text-black">
            Brands
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-2">
            <IoSearchOutline />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent px-2 outline-none"
            />
          </div>
          <LuShoppingCart />
          <VscAccount />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import { useState } from "react";
// import { LuShoppingCart } from "react-icons/lu";
// import { IoSearchOutline } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { VscAccount } from "react-icons/vsc";
// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <div className="bg-white border-b shadow-sm">
//       <div className="container mx-auto flex items-center px-4 py-2">
//         {/* Logo */}
//         <h1 className="text-2xl font-extrabold mr-8">SHOP.CO</h1>

//         {/* Mobile Menu Toggle */}
//         <button onClick={toggleMenu} className="text-2xl md:hidden">
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Nav Links */}
//         <nav
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } flex-col md:flex md:flex-row md:space-x-6 absolute md:relative top-16 left-0 w-full md:w-auto bg-white shadow-lg md:shadow-none md:top-auto z-20 p-4 md:p-0`}
//         >
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-gray-700 flex items-center hover:text-black"
//             >
//               Shop
//               <RiArrowDropDownLine className="ml-1 text-xl" />
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-[200px]">
//                 <Link href="/productdetail" className="block px-4 py-2">
//                   Product Details
//                 </Link>
//                 <Link href="/categorypage" className="block px-4 py-2">
//                   Category Page
//                 </Link>
//                 <Link href="/cart" className="block px-4 py-2">
//                   Cart
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link href="#" className="hover:text-black whitespace-nowrap">
//             On Sale
//           </Link>
//           <Link href="NewArrivals" className="hover:text-black whitespace-nowrap">
//             New Arrivals
//           </Link>
//           <Link href="#" className="hover:text-black">
//             Brands
//           </Link>
//         </nav>

//         {/* Search and Icons */}
//         <div className="hidden md:flex items-center space-x-4 ml-4 w-full">
//           {/* Search Bar */}
//           <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-[300px] lg:w-[500px]">
//             <IoSearchOutline />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent px-3 outline-none w-full"
//             />
//           </div>
//           <LuShoppingCart className="text-xl" />
//           <VscAccount className="text-xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav
