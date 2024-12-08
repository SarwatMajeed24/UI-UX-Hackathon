const reviews = [
    {
      name: "Sarah M.",
      review: "I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.”",
      rating: 5,
    },
    {
      name: "Alex K.",
      review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 4,
    },
    {
      name: "James L.",
      review: "Is someone whos always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
      rating: 5,
    }
  ];
  
  const ReviewPage = () => {
    return (
      <div className="py-16">
        <h1 className="text-4xl text-center font-bold mb-8">OUR HAPPY CUSTOMERS</h1>
  
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start"
              >
                 <div className="flex mb-2 ">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
               
                <p className="text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewPage;
  
