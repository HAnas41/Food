import React from "react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Main Image */}
      <Image 
  src="/images/chieffood.jpg" 
  alt="Delicious Food" 
  width={700}  // Set the width as per your design
  height= {200}  // Adjust based on the aspect ratio
  className="rounded-lg object-cover mx-auto"
/>

      {/* Badge */}
      <div className="absolute top-6 left-8 bg-white text-green-500 px-4 py-2 shadow-md rounded-full flex items-center">
        Hot Spicy Food <span className="ml-2 text-red-500">&#127798;</span>
      </div>

      {/* Food Cards */}
      <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 flex space-x-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-32">
        <Image 
  src="/images/th.jpg" 
  alt="Spicy Noodles" 
  width={64}  // Set a fixed width for the image (16 * 4 for consistency with w-16)
  height={64}  // Same height as the width to maintain the aspect ratio for the round shape
  className="rounded-full mx-auto"
/>
          <p className="text-sm font-semibold mt-2">Spicy noodles</p>
          <p className="text-gray-500 text-sm">$18.00</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 text-center w-32">
        <Image
  src="/images/noodle.jpg"
  alt="Vegetarian Salad"
  width={64}  // Set a fixed width for the image (16 * 4 for consistency with w-16)
  height={64}  // Same height as the width to maintain the aspect ratio for the round shape
  className="rounded-full mx-auto"
/>
          <p className="text-sm font-semibold mt-2">Vegetarian salad</p>
          <p className="text-gray-500 text-sm">$23.00</p>
        </div>
      </div>
    </div>
  );
}
