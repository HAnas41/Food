import React from "react";

export default function HeroContent() {
  return (
    <div className="max-w-xl text-center md:text-left mt-10">
      <h1 className="text-4xl font-bold text-gray-800 leading-tight">
        Dive into Delights <br />
        Of Delectable <span className="text-green-500">Food</span>
      </h1>
      <p className="text-gray-600 mt-4 text-lg">
        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship.
      </p>
      <div className="flex justify-center md:justify-start items-center space-x-4 mt-6">
        <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600">
          Order Now
        </button>
       <button className="flex items-center text-gray-700 hover:text-green-500">
  Watch Video
  <span className="ml-2 p-2 bg-white-300 rounded-full shadow-lg hover:shadow-xl transition-all">
    &#9658; {/* Play Icon */}
  </span>
</button>
</div>
    </div>
  );
}
