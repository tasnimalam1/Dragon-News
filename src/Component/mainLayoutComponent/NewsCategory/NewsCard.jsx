import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ( props = {}) => {
    const {news} = props || {};
  // Calculate the number of filled stars based on rating
  const filledStars = Math.floor(news.rating.number);
  const totalStars = 5;

  return (
    <div className="p-6 mx-10 my-10 bg-white shadow-md rounded-lg border border-gray-200">
      {/* Header: Author and Action Icons */}
      <div className="flex items-center justify-between">
        {/* Author Section */}
        <div className="flex items-center space-x-4">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex space-x-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-gray-700" title="Save" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" title="Share" />
        </div>
      </div>
      
      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold">{news.title}</h3>
      
      {/* Image */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-full object-cover rounded-lg mt-4"
      />

      {/* Details */}
      <p className="mt-4 text-gray-700 text-sm">
        {news.details.substring(0, 150)}...
        <span className="text-blue-500 cursor-pointer"> Read More</span>
      </p>

      {/* Footer: Rating and Views */}
      <div className="flex justify-between items-center mt-4">
        {/* Rating Section */}
        <div className="flex items-center space-x-1 text-yellow-500">
          {Array.from({ length: totalStars }, (_, index) => (
            <FaStar
              key={index}
              className={index < filledStars ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 font-semibold text-gray-600">{news.rating.number}</span>
        </div>
        
        {/* Views */}
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
