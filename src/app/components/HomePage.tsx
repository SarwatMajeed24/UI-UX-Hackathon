import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-gray-100 relative w-full">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-4 sm:px-8 lg:px-16">
        {/* Left Side: Heading, Paragraph, and Button */}
        <div className="text-center md:text-left md:w-1/2 py-12 md:py-16 lg:py-20">
          <h1 className="font-IntegralCF text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="font-Satoshi text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
            Shop Now
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full md:w-1/2 bg-transparent">
          <div className="w-full h-auto bg-transparent">
            <Image
              src="/images/Screenshot from 2024-12-12 19-20-22.png"
              alt="Homepage Background"
              width={700}
              height={700}
              className="object-cover rounded-lg shadow-none"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute left-6 md:left-4 sm:left-12 top-1/2 transform -translate-y-1/2">
            <Image
              src="/images/Vector.png"
              alt="Star Left-Center"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8">
            <Image
              src="/images/Vector (1).png"
              alt="Star Top-Right"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-black py-8 -mt-0">
        <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-8 px-4 sm:px-8 lg:px-16">
          {[
            { src: "/images/Group.png", alt: "Versace Group", width: 166, height: 33 },
            { src: "/images/zara-logo-1 1.png", alt: "Zara Logo", width: 91, height: 38 },
            { src: "/images/gucci-logo-1 1.png", alt: "Gucci Logo", width: 166, height: 33 },
            { src: "/images/prada-logo-1 1.png", alt: "Prada Logo", width: 166, height: 33 },
            { src: "/images/Group (1).png", alt: "Versace Group", width: 166, height: 33 },
          ].map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-w-[90px] sm:max-w-[120px] md:max-w-[166px] transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

































    // <div className="relative w-full">

    
    //   <div className="w-full">
    //     <Image
    //       src="/images/Screenshot from 2024-12-12 19-20-22.png" 
    //       alt="Homepage Background"
    //       layout="responsive"
    //       width={1440}
    //       height={663}
    //       className="object-cover"
    //     />
    //        <div className="absolute left-[850px] right-[634px] top-[597px] bottom-[310] transform -translate-y-1/2 z-10">
    //       <Image
    //         src="/images/Vector.png"
    //         alt="Vector Image Left-Center"
    //         layout="intrinsic"
    //         width={56}
    //         height={56}
    //         className="object-contain w-[56] h-[56]"
    //       />
    //     </div> 

    //     {/* Right-Top Vector */}
    //     <div className="absolute right-8 top-16 z-12">
    //       <Image
    //         src="/images/Vector (1).png"
    //         alt="Vector Image Right-Top"
    //         layout="intrinsic"
    //         width={120}
    //         height={120}
    //         className="object-contain"
    //       />
    //     </div>
    //   </div>

    //   {/* Text and Button Positioned on Top of the Image */}
    //   <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-black m-8 p-8 w-full sm:w-[80%] lg:w-[600px]">
    //     <h1 className="font-IntegralCF text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-start sm:text">
    //       FIND CLOTHES THAT MATCHES YOUR STYLE
    //     </h1>
    //     <p className="font-Satoshi text-sm sm:text-base text-slate-500 mb-6 text-center sm:text-left">
    //       Browse through our diverse range of meticulously crafted garments,
    //       designed to bring out your individuality and cater to your sense of style.
    //     </p>
    //     <div className="text-center sm:text-left">
    //       <button className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full w-[220px] sm:w-[240px] mx-auto sm:mx-0">
    //         Shop Now
    //       </button>
    //     </div>
    //   </div>

//     import Image from "next/image";
//     import LogoSection from "./LogoSection"; 

// const HomePage = () => {
//   return (
  
//     <div className="bg-[#F5F5F5] relative w-full p-4 md:p-8">
//       <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
//         {/* Left Side: Heading, Paragraph, and Button */}
//         <div className="text-center md:text-left md:w-1/2">
//           {/* Heading */}
//           <h1 className="font-IntegralCF text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h1>

//           {/* Paragraph */}
//           <p className="font-Satoshi text-sm sm:text-base md:text-lg text-slate-500 mb-6">
//             Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of style.
//           </p>

//           {/* Button */}
//           <div className="text-center md:text-left">
//             <button className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full w-[200px] sm:w-[240px]">
//               Shop Now
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="relative w-full md:w-1/2 mt-6 md:mt-0">
//           {/* Image */}
//           <Image
//             src="/images/Homepage.png"
//             alt="Homepage Background"
//             layout="responsive"
//             width={1440}
//             height={663}
//             className="object-cover"
//           />

//           {/* Left-Center Star */}
//           <div className="absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 z-10">
//             <Image
//               src="/images/Vector.png"
//               alt="Star Left-Center"
//               layout="intrinsic"
//               width={56}
//               height={56}
//               className="object-contain w-8 sm:w-10 md:w-14"
//             />
//           </div>

//           {/* Top-Right Star */}
//           <div className="absolute top-4 md:top-8 right-4 md:right-8 z-10">
//             <Image
//               src="/images/Vector (1).png"
//               alt="Star Top-Right"
//               layout="intrinsic"
//               width={56}
//               height={56}
//               className="object-contain w-8 sm:w-10 md:w-14"
//             />
//           </div>
//         </div>
//       </div>

//       <LogoSection />
//     </div>
    
    
//   );
// };

// export default HomePage;


// import Image from "next/image";
// import LogoSection from "./LogoSection"; // Adjust the path based on your file structure

// const HomePage = () => {
//   return (
//     <div className="bg-[#F5F5F5] relative w-full p-4 md:p-8">
//       <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
//         {/* Left Side: Heading, Paragraph, and Button */}
//         <div className="text-center md:text-left md:w-1/2">
//           <h1 className="font-IntegralCF text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
//             FIND CLOTHES THAT MATCHES YOUR STYLE
//           </h1>

//           <p className="font-Satoshi text-sm sm:text-base md:text-lg text-slate-500 mb-6">
//             Browse through our diverse range of meticulously crafted garments,
//             designed to bring out your individuality and cater to your sense of style.
//           </p>

//           <div className="text-center md:text-left">
//             <button className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full w-[200px] sm:w-[240px]">
//               Shop Now
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Image */}
//         <div className="relative w-full md:w-1/2 mt-6 md:mt-0">
//           <Image
//             src="/images/Homepage.png"
//             alt="Homepage Background"
//             layout="responsive"
//             width={1600}
//             height={800}
//             className="object-cover"
//           />

//           {/* Left-Center Star */}
//           <div className="absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 z-10">
//             <Image
//               src="/images/Vector.png"
//               alt="Star Left-Center"
//               layout="intrinsic"
//               width={56}
//               height={56}
//               className="object-contain w-8 sm:w-10 md:w-14"
//             />
//           </div>

//           {/* Top-Right Star */}
//           <div className="absolute top-4 md:top-8 right-4 md:right-8 z-10">
//             <Image
//               src="/images/Vector (1).png"
//               alt="Star Top-Right"
//               layout="intrinsic"
//               width={56}
//               height={56}
//               className="object-contain w-8 sm:w-10 md:w-14"
//             />
//           </div>
//         </div>
//       </div>
//       <LogoSection/>
//     </div>
//   );
// };

// export default HomePage;

