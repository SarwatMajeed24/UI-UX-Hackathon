import Image from "next/image";

const DressStyle = () => {
    return (
        <div className="flex justify-center my-12 px-4 md:px-8">
            <div className="w-full md:w-[90%] lg:w-[1239px] h-auto bg-[#e7e5e4] border rounded-3xl p-6">
                {/* Center the heading */}
                <h1 className="font-Integral CF font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-8">
                    BROWSE BY DRESS STYLE
                </h1>

                {/* Grid container for the images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-8 lg:gap-x-48 gap-y-8">
                    {/* First Image */}
                    <div className="col-span-1">
                        <div className="w-full h-[200px] md:w-[407px] md:h-[289px] relative mx-auto">
                            <Image
                                src="/images/Casual.png"
                                alt="Casual Dress"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </div>

                    {/* Second Image */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                  
                        <div className="w-full h-[200px] lg:w-[684px] md:w-[584px]  md:h-[289px] relative mx-auto">
                            <Image
                                src="/images/Formal.png"
                                alt="Formal Dress"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </div>

                    {/* Third Image */}
                    <div className="col-span-1">
                        <div className="w-full h-[200px] lg:w-[684px] md:w-[584px] md:h-[289px] relative mx-auto">
                            <Image
                                src="/images/Party.png"
                                alt="Party dress"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </div>

                    {/* Fourth Image */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <div className="w-full h-[200px] md:w-[407px] md:h-[289px] relative mx:96">
                            <Image
                                src="/images/Gym.png"
                                alt="Gym Dress"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md lg:mx-[350px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DressStyle;
