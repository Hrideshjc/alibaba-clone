import React from 'react';

const LatestFromAlibaba = () => {
  const articles = [
    {
      id: 1,
      image: "https://img.alicdn.com/imgextra/i2/O1CN01Yw1ALy1Vv3cDDZgF8_!!6000000002714-0-tps-599-380.jpg",
      title: "5 questions to ask a seller before placing a B2B order",
      date: "Feb 3, 2021",
      readTime: "2 min read",
    },
    {
      id: 2,
      image: "https://img.alicdn.com/imgextra/i4/O1CN01xHBVp321zEw3lEclo_!!6000000007055-0-tps-600-380.jpg",
      title: "Importing like a pro: questions you must ask your supplier",
      date: "May 21, 2021",
      readTime: "5 min read",
    },
    {
      id: 3,
      image: "https://img.alicdn.com/imgextra/i4/O1CN01z1mOCY1cPdl2XiWFt_!!6000000003593-2-tps-600-380.png",
      title: "Ensure smooth shipping with this importing checklist",
      date: "May 11, 2021",
      readTime: "2 min read",
    },
  ];

  return (
    
    <section className="py-16 px-4 sm:px-6 md:px-8 w-full max-w-[1200px] mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] text-center mb-12 sm:mb-16">
          Latest from Alibaba.com
        </h2>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#222222] leading-snug mb-6 line-clamp-2 hover:text-[#FA6C48] cursor-pointer transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">Alibaba.com</p>
                </div>

                <div className="mt-4 flex items-center text-gray-400 text-sm border-t border-gray-50 pt-4">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button className="w-full max-w-xs px-8 py-3 border-2 border-[#FA6C48] text-[#FA6C48] font-bold rounded-full hover:bg-[#FA6C48] hover:text-white transition-all duration-300 transform active:scale-95 sm:w-auto">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestFromAlibaba;