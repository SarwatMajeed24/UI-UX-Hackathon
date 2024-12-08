import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative w-full">
      {/* Full-width Image */}
      <div className="w-full">
        <Image
          src="/images/Homepage.png"
          alt="title pic"
          layout="responsive"
          width={1440}
          height={663}
          className="object-cover"
        />
      </div>

      {/* Text and Button Positioned on Left Side of the Image */}
      <div className="absolute my-auto w-[596px] ml-32 top-80 left-8 transform -translate-y-1/2 p-8 text-black">
        <h1 className="font-IntegralCF text-4xl md:text-6xl font-bold mb-4">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <div>
        <div className="w-[545px]">
        <h2 className="font-Satoshi text-sm text-slate-500 md:text-sm mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </h2>
        </div>
        
        <button className="bg-black text-white text px-6 py-3 rounded-full w-[210px] h-[52px]">
          Shop Now
        </button>
      </div>
        </div>

        
        <div className="w-full h-[122PX] bg-black">
       
        <Image
          src="/images/Group.png"
          alt="Versace group"
          width={166.48}
          height={33.16}
          className="py-10"
        />

<Image
          src="/images/zara-logo-1 1.png"
          alt="Zara Logo"
          width={91}
          height={38}
          className="py-10"
        />

<Image
          src="/images/gucci-logo-1 1.png"
          alt="Gucci LOgo"
          width={166.48}
          height={33.16}
          className="py-10"
        />

<Image
          src="/images/prada-logo-1 1.png"
          alt="Parada Logo"
          width={166.48}
          height={33.16}
          className="py-10"
        />

<Image
          src="/images/Group (1).png"
          alt="Versace group"
          width={166.48}
          height={33.16}
          className="py-10"
        />
      </div>
           
      </div>
  
    
  );
};

export default HomePage;
