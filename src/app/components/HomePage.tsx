import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative w-full">

    
      <div className="w-full">
        <Image
          src="/images/Homepage.png" 
          alt="Homepage Background"
          layout="responsive"
          width={1440}
          height={663}
          className="object-cover"
        />
           <div className="absolute left-[850px] right-[634px] top-[597px] bottom-[310] transform -translate-y-1/2 z-10">
          <Image
            src="/images/Vector.png"
            alt="Vector Image Left-Center"
            layout="intrinsic"
            width={56}
            height={56}
            className="object-contain w-[56] h-[56]"
          />
        </div> 

        {/* Right-Top Vector */}
        <div className="absolute right-8 top-16 z-12">
          <Image
            src="/images/Vector (1).png"
            alt="Vector Image Right-Top"
            layout="intrinsic"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      {/* Text and Button Positioned on Top of the Image */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-black m-8 p-8 w-full sm:w-[80%] lg:w-[600px]">
        <h1 className="font-IntegralCF text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-start sm:text">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-Satoshi text-sm sm:text-base text-slate-500 mb-6 text-center sm:text-left">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <div className="text-center sm:text-left">
          <button className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full w-[220px] sm:w-[240px] mx-auto sm:mx-0">
            Shop Now
          </button>
        </div>
      </div>

  {/* Logo Section */}
<div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 bg-black py-8">
  <div className="flex justify-center items-center">
    <Image
      src="/images/Group.png"
      alt="Versace group"
      width={166.48}
      height={33.16}
      className="max-w-[120px] sm:max-w-[166px] transition-all duration-300"
    />
  </div>

  <div className="flex justify-center items-center">
    <Image
      src="/images/zara-logo-1 1.png"
      alt="Zara Logo"
      width={91}
      height={38}
      className="max-w-[90px] sm:max-w-[91px] transition-all duration-300"
    />
  </div>

  <div className="flex justify-center items-center">
    <Image
      src="/images/gucci-logo-1 1.png"
      alt="Gucci Logo"
      width={166.48}
      height={33.16}
      className="max-w-[120px] sm:max-w-[166px] transition-all duration-300"
    />
  </div>

  <div className="flex justify-center items-center">
    <Image
      src="/images/prada-logo-1 1.png"
      alt="Prada Logo"
      width={166.48}
      height={33.16}
      className="max-w-[120px] sm:max-w-[166px] transition-all duration-300"
    />
  </div>

  <div className="flex justify-center items-center">
    <Image
      src="/images/Group (1).png"
      alt="Versace group"
      width={166.48}
      height={33.16}
      className="max-w-[120px] sm:max-w-[166px] transition-all duration-300"
    />
  </div>
</div>


    </div>
  );
};

export default HomePage;

