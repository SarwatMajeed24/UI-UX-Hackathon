import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const TopSellings = () => {
    return (
        <div>
            {/* Center the New Arrivals text */}
            <div className="flex justify-center items-center w-full mt-12 h-[58px] font-Integral CF">
                <h1 className="text-center text-5xl font-extrabold">TOP SELLINGS</h1>
            </div>

            <div className="flex flex-wrap justify-center w-[295] h-[298] mt-16 gap-6">   
                {/* Product 1 */}
                <div className="bg-white w-[295px] h-[298px] mb-4 text-center">
                    <Image
                        src="/images/VerticalStrips.png"
                        alt="Vertical strip shirt Image"
                        width={900}
                        height={900}
                        className=" border rounded-3xl" 
                    />
                    <div className="text-start font-Satoshi w-[194px] h-[27px] font-bold whitespace-nowrap">
                    VERTICAL STRIPED SHIRT
                    </div>
                    <div className="flex justify-start space-x-1">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">5.0</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="text-start font-Satoshi w-[53px] h-[32px] font-bold">
                        $212
                    </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white w-[295px] h-[298px] mb-4 text-center">
                    <Image
                        src="/images/courage-graphics.png"
                        alt="Jeans Image"
                        width={900}
                        height={900}
                        className="h-[296px] w-[298px] border rounded-3xl" 
                    />
                    <div className="text-start font-Satoshi w-[226px] h-[27px] font-bold whitespace-nowrap">
                    COURAGE GRAPHIC T-SHIRT
                    </div>
                    <div className="flex justify-start space-x-1 w-[137.9] h-[19]">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">4.0</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="font-Satoshi w-[54px] h-[32px] font-bold">
                        $145
                    </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white w-[295px] h-[298px] mb-4 text-center">
                    <Image
                        src="/images/LooseFitShorts.png"
                        alt="Loose fit Shorts Image"
                        width={900}
                        height={900}
                        className="h-[296px] w-[298px] border rounded-3xl" 
                    />
                    <div className="text-start font-Satoshi w-[239px] h-[27px] font-bold whitespace-nowrap">
                    LOOSE FIT BERMUDA SHORTS
                    </div>
                    <div className="flex justify-start space-x-1 w-[113.09] h-[19]">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">3.0</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="text-start font-Satoshiw-[47px] h-[32px] font-bold">
                        $80
                    </div>
                </div>

                {/* Product 4 */}
                <div className=" bg-white w-[295px] h-[298px] mb-4 text-center">
                    <Image
                        src="/images/fadedShinyJeans.png"
                        alt="Faded Shiny Jeans Image"
                        width={900}
                        height={900}
                        className="h-[296px] w-[298px] border rounded-3xl" 
                    />
                    <div className="text-start font-satoshi w-[185px] h-[27px] font-bold">
                    FADED SKINNY JEANS
                    <div className="flex justify-start space-x-1 w-[150] h-[19]">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">4.5</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="font-Satoshi w-[55px] h-[32px] font-bold">
                        $210
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-24 ">
    <button className="border border-slate-400 w-[218px] h-[52px] text-slate-600 font-bold py-3 px-8 rounded-3xl hover:bg-slate-100 hover:text-slate-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
        View All
    </button>
</div>
</div>  
    );
}

export default TopSellings;
