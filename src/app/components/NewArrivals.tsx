import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const NewArrivals = () => {
  return (
    <div className="py-16">
      {/* Center the New Arrivals text */}
      <div className="flex justify-center items-center w-full mb-16">
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-800">
          NEW ARRIVALS
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-0">
        {/* Product 1 */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <Image
            src="/images/TShirt.png"
            alt="TShirt Image"
            width={500}
            height={500}
            className="h-[296px] object-cover rounded-3xl"
          />
          <div className="p-4">
            <div className="text-start font-Satoshi font-bold text-lg text-gray-800 mb-2">
              T-SHIRT WITH TAPE DETAILS
            </div>
            <div className="flex justify-start space-x-1 mb-2">
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStarHalf className="text-yellow-400 text-lg" />
              <h6 className="text-xs text-slate-500">4.5</h6>
              <h6 className="text-xs text-slate-300">/5</h6>
            </div>
            <div className="font-Satoshi font-bold text-xl text-gray-900">$120</div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <Image
            src="/images/Jeans.png"
            alt="Jeans Image"
            width={900}
            height={900}
            className="h-[296px] w-full object-cover rounded-3xl"
          />
          <div className="p-4">
            <div className="text-start font-Satoshi font-bold text-lg text-gray-800 mb-2">
              SKINNY FIT JEANS
            </div>
            <div className="flex justify-start space-x-1 mb-2">
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStarHalf className="text-yellow-400 text-lg" />
              <h6 className="text-xs text-slate-500">3.5</h6>
              <h6 className="text-xs text-slate-300">/5</h6>
            </div>
            <div className="font-Satoshi font-bold text-xl text-gray-900">$240</div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <Image
            src="/images/checked-Shirt.png"
            alt="Checked Shirt Image"
            width={900}
            height={900}
            className="h-[296px] w-full object-cover rounded-3xl"
          />
          <div className="p-4">
            <div className="text-start font-Satoshi font-bold text-lg text-gray-800 mb-2">
              CHECKERED SHIRT
            </div>
            <div className="flex justify-start space-x-1 mb-2">
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStarHalf className="text-yellow-400 text-lg" />
              <h6 className="text-xs text-slate-500">4.5</h6>
              <h6 className="text-xs text-slate-300">/5</h6>
            </div>
            <div className="font-Satoshi font-bold text-xl text-gray-900">$180</div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-3xl overflow-hidden">
          <Image
            src="/images/SleevesStripTshirt.png"
            alt="Sleeves Strip Tshirt Image"
            width={500}
            height={500}
            className="h-[296px] w-[298] object-cover rounded-3xl"
          />
          <div className="p-4">
            <div className="text-start font-Satoshi font-bold text-lg text-gray-800 mb-2">
              SLEEVE STRIPED T-SHIRT
            </div>
            <div className="flex justify-start space-x-1 mb-2">
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStar className="text-yellow-400 text-lg" />
              <FaStarHalf className="text-yellow-400 text-lg" />
              <h6 className="text-xs text-slate-500">4.5</h6>
              <h6 className="text-xs text-slate-300">/5</h6>
            </div>
            <div className="font-Satoshi font-bold text-xl text-gray-900">$130</div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <button className="border border-slate-400 w-[218px] h-[52px] text-slate-600 font-bold py-3 px-8 rounded-3xl hover:bg-slate-100 hover:text-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
