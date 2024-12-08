import Image from "next/image";

const DressStyle = () => {
    return (
        <div className="flex justify-center my-12">
            <div className="w-[1239px] h-auto bg-[#e7e5e4] border rounded-3xl p-6">
                {/* Center the heading */}
                <h1 className="font-Integral CF font-bold text-5xl text-center mb-8">
                    BROWSE BY DRESS STYLE
                </h1>

                {/* Grid container for the images */}
                <div className="grid grid-cols-4 gap-x-48 gap-y-8">
        {/* First Image */}
        <div className="col-span-1">
          <div className="w-[407px] h-[289px] relative ml-14">
            <Image
              src="/images/Casual.png" // Replace with your image path
              alt="Casual Dress"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="col-span-3">
          <div className="w-[684px] h-[289px] relative ml-40">
            <Image
              src="/images/Formal.png" // Replace with your image path
              alt="Formal Dress"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Third Image */}
        <div className="col-span-1">
          <div className="w-[684px] h-[289px] relative ml-14">
            <Image
              src="/images/Party.png" // Replace with your image path
              alt="Party dress"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Fourth Image */}
        <div className="col-span-3  ">
          <div className="w-[407px] h-[289px] relative ml-[50%]">
            <Image
              src="/images/Gym.png" // Replace with your image path
              alt="Gym Dress"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
        </div>
            </div>
        </div>
    );
};

export default DressStyle;


