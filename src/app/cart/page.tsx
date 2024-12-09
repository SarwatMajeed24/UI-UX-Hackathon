// import Image from 'next/image'
// import { GoArrowRight } from "react-icons/go";
// import { IoPricetagOutline } from "react-icons/io5";
// import { RiDeleteBin3Fill } from "react-icons/ri";

// const Cart = () => {
//   return (
//     <div className="container mx-auto px-4 py-10 w-[1315px]">
//       <div className="flex flex-col lg:flex-row">
//         {/* Left Side - Cart Items */}
//         <div className="flex-1 bg-white shadow-lg rounded-lg p-6 mb-8 lg:mb-0">
//           <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
          
//           {/* Cart Item */}
//           <div className="flex items-center justify-between mb-6 border-b pb-4">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src="/images/product detail page/Cate1.png" // Replace with actual image path
//                 alt="Product"
//                 width={124}
//                 height={124}
//                 className="object-cover rounded"
//               />
//               <div>
//                 <h3 className="text-xl font-medium">Gradient Graphic T-shirt</h3>
//                 <p className="text-sm text-gray-500">Size: Large</p>
//                 <p className="text-sm text-gray-500">Color: White</p>
//                 <p className="text-lg text-gray-500 font-bold">$145</p>
//               </div>
//             </div>
//             <div className="text-end">
//             <p className="text-lg font-semibold text-red-500"><RiDeleteBin3Fill /></p>
//               <div className="flex items-center mt-2 border rounded-xl bg-slate-200">
//                 <button className="px-3 py-1 text-sm">-</button>
//                 <span className="mx-2">1</span>
//                 <button className="px-3 py-1 text-sm">+</button>
//               </div>
//             </div>
//           </div>

          
//           <div className="flex items-center justify-between mb-6 border-b pb-4">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src="/images/product detail page/cate4.png"
//                 alt="Product"
//                 width={124}
//                 height={124}
//                 className="object-cover rounded"
//               />
//               <div>
//                 <h3 className="text-xl font-medium">CHECKED SHIRT</h3>
//                 <p className="text-sm text-gray-500">Size: Medium</p>
//                 <p className="text-sm text-gray-500">Color: Red</p>
//                 <p className="text-lg text-gray-500 font-bold">$180</p>
//               </div>
//             </div>
//             <div className="text-end">
//               <p className="text-lg font-semibold text-red-500"><RiDeleteBin3Fill /></p>
//               <div className="flex items-center mt-2 border rounded-xl bg-slate-200">
//                 <button className="px-3 py-1 text-sm ">-</button>
//                 <span className="mx-2">1</span>
//                 <button className="px-3 py-1 text-sm">+</button>
//               </div>
//             </div>
//           </div>

//           {/* Another Cart Item (Repeat similar block for multiple items) */}
//           <div className="flex items-center justify-between mb-6 border-b pb-4">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src="/images/product detail page/cate5.png" // Replace with actual image path
//                 alt="Product"
//                 width={120}
//                 height={120}
//                 className="object-cover rounded"
//               />
//               <div>
//                 <h3 className="text-xl font-medium">SKINNY FIT JEANS</h3>
//                 <p className="text-sm text-gray-500">Size: Large</p>
//                 <p className="text-sm text-gray-500">Color: Blue</p>
//                 <p className="text-lg text-gray-500 font-bold">$145</p>
//               </div>
//             </div>
//             <div className="text-end">
//               <p className="text-lg font-semibold text-red-500"><RiDeleteBin3Fill /></p>
//               <div className="flex items-center mt-2 border rounded-xl bg-slate-200">
//                 <button className="px-3 py-1 text-sm">-</button>
//                 <span className="mx-2">1</span>
//                 <button className="px-3 py-1 text-sm">+</button>
//               </div>
//             </div>
//           </div>

      
//         </div>

//         {/* Right Side - Recommendations or Ads */}
//         <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 ml-8 w-[505px]">
//             {/* Cart Summary */}
//             <div className="mt-8">
//             <div className="flex justify-between mb-4">
//               <span className="text-lg font-semibold">Subtotal:</span>
//               <span className="text-lg font-semibold">$565.00</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span className="text-lg font-semibold">Discount (-20%)</span>
//               <span className="text-lg font-semibold text-red">-$113</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span className="text-lg font-semibold">Deliivery Free</span>
//               <span className="text-lg font-semibold text-red">$467</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span className="text-xl font-semibold">Total:</span>
//               <span className="text-xl font-semibold">$467</span>
//             </div>
//             <div className="flex items-center bg-slate-100 rounded-full w-full sm:w-[349px] h-[46px] px-3 py-2">
//               <IoPricetagOutline className="text-xl text-gray-600" />
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="bg-slate-100 outline-none px-2 w-full"
//               />
//             </div>
//             <button className="w-[119px] bg-black text-white py-3 rounded-full text-lg mt-6">Apply</button>
//             <button className="w-full bg-black text-white py-3 rounded-full text-lg mt-6">Go to checkboot<GoArrowRight /></button>
//           </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Cart
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import { IoPricetagOutline } from "react-icons/io5";
import { RiDeleteBin3Fill } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Cart Items */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>
          
          {/* Cart Item */}
          <div className="relative flex items-center justify-between mb-6 border-b pb-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/product detail page/Cate1.png"
                alt="Product"
                width={124}
                height={124}
                className="object-cover rounded"
              />
              <div>
                <h3 className="text-xl font-medium">Gradient Graphic T-shirt</h3>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <p className="text-lg text-gray-500 font-bold">$145</p>
              </div>
            </div>
            <button className="absolute top-2 right-2 text-lg font-semibold text-red-500">
              <RiDeleteBin3Fill />
            </button>
            <div className="flex items-center mt-2 border rounded-xl bg-slate-200">
              <button className="px-3 py-1 text-sm">-</button>
              <span className="mx-2">1</span>
              <button className="px-3 py-1 text-sm">+</button>
            </div>
          </div>

          {/* Another Cart Item */}
          <div className="relative flex items-center justify-between mb-6 border-b pb-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/product detail page/cate4.png"
                alt="Product"
                width={124}
                height={124}
                className="object-cover rounded"
              />
              <div>
                <h3 className="text-xl font-medium">CHECKED SHIRT</h3>
                <p className="text-sm text-gray-500">Size: Medium</p>
                <p className="text-sm text-gray-500">Color: Red</p>
                <p className="text-lg text-gray-500 font-bold">$180</p>
              </div>
            </div>
            <button className="absolute top-2 right-2 text-lg font-semibold text-red-500">
              <RiDeleteBin3Fill />
            </button>
            <div className="flex items-center mt-2 border rounded-xl bg-slate-200">
              <button className="px-3 py-1 text-sm">-</button>
              <span className="mx-2">1</span>
              <button className="px-3 py-1 text-sm">+</button>
            </div>
          </div>

          {/* Another Cart Item */}
          <div className="relative flex items-center justify-between mb-6 border-b pb-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/product detail page/cate5.png"
                alt="Product"
                width={120}
                height={120}
                className="object-cover rounded"
              />
              <div>
                <h3 className="text-xl font-medium">SKINNY FIT JEANS</h3>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: Blue</p>
                <p className="text-lg text-gray-500 font-bold">$145</p>
              </div>
            </div>
            <button className="absolute top-2 right-2 text-lg font-semibold text-red-500">
              <RiDeleteBin3Fill />
            </button>
            <div className="flex items-center mt-2 border rounded-xl bg-slate-200">
              <button className="px-3 py-1 text-sm">-</button>
              <span className="mx-2">1</span>
              <button className="px-3 py-1 text-sm">+</button>
            </div>
          </div>
        </div>

        {/* Right Side - Cart Summary & Promo Code */}
        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 ml-8 w-full">
          <div className="mt-8">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold">Subtotal:</span>
              <span className="text-lg font-semibold">$565.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold">Discount (-20%)</span>
              <span className="text-lg font-semibold text-red">-$113</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold">Delivery Free</span>
              <span className="text-lg font-semibold text-red">$467</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl font-semibold">$467</span>
            </div>

            {/* Promo Code Input and Button */}
            <div className="flex items-center mb-6 bg-slate-100 rounded-full w-full h-[46px] px-3 py-2">
              <IoPricetagOutline className="text-xl text-gray-600" />
              <input
                type="text"
                placeholder="Enter promo code"
                className="bg-slate-100 outline-none px-2 w-full"
              />
              <button className="bg-black text-white py-2 px-6 text-sm rounded-full ml-4">
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-3 rounded-full text-lg mt-6 flex justify-center items-center">
              Go to Checkout <GoArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
