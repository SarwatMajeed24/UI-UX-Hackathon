import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const NewArrivals = () => {
    return (
        <div>
            {/* Center the New Arrivals text */}
            <div className="flex justify-center items-center w-[403px] mt-12 h-[58px] font-Integral CF">
                <h1 className="text-center text-5xl font-extrabold">NEW ARRIVALS</h1>
            </div>

            <div className="flex flex-wrap justify-center w-[296] h-[444] mt-16 gap-6">   
                {/* Product 1 */}
                <div className="bg-white w-[295px] h-[298px] mb-4 text-center">
                    <Image
                        src="/images/TShirt.png"
                        alt="TShirt Image"
                        width={900}
                        height={900}
                        className="h-[296px] w-[298px] border rounded-3xl" 
                    />
                    <div className="text-start font-Satoshi w-[225px] h-[27px] font-bold whitespace-nowrap">
                        T-SHIRT WITH TAPE DETAILS
                    </div>
                    <div className="font-Satoshi flex justify-start space-x-1 w-[150px] h-[19px]">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">4.5</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                   

                    <div className="font-Satoshi w-[55px] h-[32px] font-bold">
                        $120
                    </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white w-[295px] h-[298px] mb-4 text-center">
                    <Image
                        src="/images/Jeans.png"
                        alt="Jeans Image"
                        width={900}
                        height={900}
                        className="h-[296px] w-[298px] border rounded-3xl" 
                    />
                    <div className="text-start font-Satoshi w-[150px] h-[27px] font-bold whitespace-nowrap">
                    SKINNY FIT JEANS
                    </div>
                    <div className="font-Satoshi flex justify-start space-x-1 w-[126.2px] h-[19px]">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">3.5</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="font-Satoshi w-[200px] h-[32px] font-bold">
                        $240
                    </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white w-[295px] h-[298px] mb-4 text-center">
                    <Image
                        src="/images/checked-Shirt.png"
                        alt="Checked Shirt Image"
                        width={900}
                        height={900}
                        className="h-[296px] w-[298px] border rounded-3xl" 
                    />
                    <div className="text-start font-Satoshi w-[151px] h-[27px] font-bold whitespace-nowrap">
                    CHECKERED SHIRT
                    </div>
                    <div className="font-Satoshi flex justify-start space-x-1 w-[150px] h-[19px]">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">4.5</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="font-Satoshi w-[56px] h-[32px] font-bold">
                        $180
                    </div>
                </div>

                {/* Product 4 */}
                <div className="text-start bg-white w-[295px] h-[298px] mb-4">
                    <Image
                        src="/images/SleevesStripTshirt.png"
                        alt="Sleeves Strip Tshirt Image"
                        width={900}
                        height={900}
                        className="h-[296px] w-[298px] border rounded-3xl" 
                    />
                    <div className="font-Satoshi w-[199px] h-[27px] font-bold whitespace-nowrap">
                    SLEEVE STRIPED T-SHIRT
                    <div className="font-Satoshi flex justify-start space-x-1 w-[150px] h-[19px]">
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStar className="text-yellow-400 text-lg font-bold"/>
                    <FaStarHalf className="text-yellow-400 text-lg font-bold"/>
                    <h6 className="text-xs text-slate-500">4.5</h6>
                    <h6 className="text-xs text-slate-300">/5</h6>
                    </div>
                    <div className="font-Satoshi w-[189px] h-[32px] font-bold">
                        $130
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

export default NewArrivals;
