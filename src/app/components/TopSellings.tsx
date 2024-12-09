import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const TopSellings = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            {/* Center the Top Sellings text */}
            <div className="flex justify-center items-center w-full mt-12 h-[58px] font-Integral CF">
                <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold">TOP SELLINGS</h1>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
                {/* Product 1 */}
                <div className="bg-white w-full h-auto mb-4 text-center rounded-3xl">
                    <Image
                        src="/images/VerticalStrips.png"
                        alt="Vertical strip shirt Image"
                        width={900}
                        height={900}
                        className="w-full h-64 object-cover rounded-3xl"
                    />
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-lg whitespace-nowrap">
                        VERTICAL STRIPED SHIRT
                    </div>
                    <div className="flex justify-start space-x-1 px-4 pb-2">
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                        <h6 className="text-xs text-slate-500">5.0</h6>
                        <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-xl">
                        $212
                    </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white w-full h-auto mb-4 text-center rounded-3xl ">
                    <Image
                        src="/images/courage-graphics.png"
                        alt="Jeans Image"
                        width={900}
                        height={900}
                        className="w-full h-64 object-cover rounded-3xl"
                    />
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-lg whitespace-nowrap">
                        COURAGE GRAPHIC T-SHIRT
                    </div>
                    <div className="flex justify-start space-x-1 px-4 pb-2">
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <h6 className="text-xs text-slate-500">4.0</h6>
                        <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-xl">
                        $145
                    </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white w-full h-auto mb-4 text-center rounded-3xl">
                    <Image
                        src="/images/LooseFitShorts.png"
                        alt="Loose fit Shorts Image"
                        width={900}
                        height={900}
                        className="w-full h-64 object-cover rounded-3xl"
                    />
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-lg whitespace-nowrap">
                        LOOSE FIT BERMUDA SHORTS
                    </div>
                    <div className="flex justify-start space-x-1 px-4 pb-2">
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <h6 className="text-xs text-slate-500">3.0</h6>
                        <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-xl">
                        $80
                    </div>
                </div>

                {/* Product 4 */}
                <div className="bg-white w-full h-auto mb-4 text-center rounded-3xl">
                    <Image
                        src="/images/fadedShinyJeans.png"
                        alt="Faded Shiny Jeans Image"
                        width={900}
                        height={900}
                        className="w-full h-64 object-cover rounded-3xl"
                    />
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-lg whitespace-nowrap">
                        FADED SKINNY JEANS
                    </div>
                    <div className="flex justify-start space-x-1 px-4 pb-2">
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStar className="text-yellow-400 text-lg font-bold"/>
                        <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                        <h6 className="text-xs text-slate-500">4.5</h6>
                        <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="text-start font-Satoshi px-4 py-2 font-bold text-xl">
                        $210
                    </div>
                </div>
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-24">
                <button className="border border-slate-400 w-[218px] h-[52px] text-slate-600 font-bold py-3 px-8 rounded-3xl hover:bg-slate-100 hover:text-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                    View All
                </button>
            </div>
        </div>
    );
}

export default TopSellings
