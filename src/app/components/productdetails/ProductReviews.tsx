import Card from "../cardpage/card";
import { GoDotFill } from "react-icons/go";

export default function Customer() {
  const CustomerData = [
    {
      text: "Samanthaa D.",
      description:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "Posted on: August 14, 2023",
    },
    {
      text: "Alex M.",
      description:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      date: "Posted on: August 15, 2023",
    },
    {
      text: "Ethan R.",
      description:
        "As someone who's always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      date: "Posted on: August 16, 2023",
    },
    {
      text: "Olivia P.",
      description:
        "The customer service at Shop.co is top-notch! They were incredibly helpful in assisting me with my order. I will definitely be returning for more shopping.",
      date: "Posted on: August 17, 2023",
    },
    {
      text: "Liama K.",
      description:
        "I appreciate how Shop.co prioritizes quality without compromising on affordability. Their collection is a breath of fresh air in the fashion world.",
      date: "Posted on: August 18, 2023",
    },
    {
      text: "Ava H.",
      description:
        "Shop.co has completely revolutionized my shopping experience. Their user-friendly platform, coupled with amazing products, makes for an unbeatable combo!",
      date: "Posted on: August 19, 2023",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center sm:text-left">
          All Reviews
        </h1>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <GoDotFill className="text-2xl text-gray-700" />
          <GoDotFill className="text-2xl text-gray-400" />
          <GoDotFill className="text-2xl text-gray-400" />
        </div>
      </div>

      {/* Dynamic Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CustomerData.map((customer, index) => (
          <Card
            key={index}
            text={customer.text}
            p={customer.description}
            date={customer.date}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="w-full flex justify-center mt-8 mb-12">
        <button className="text-sm sm:text-lg font-medium text-black px-6 sm:px-12 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}
