import React from "react";
import Image from "next/image";

export default function AboutFeedback() {
  return (
    <div className="flex items-center justify-start lg:justify-start mt-4">
      <div className="flex items-center gap-2">
        
        <Image 
           src="/images/men1.jpg" 
            alt="Customer 1" 
           width={40} 
             height={40} 
           className="rounded-full"
/>
<Image 
  src="/images/men2.jpg" 
  alt="Customer 2" 
  width={40} 
  height={40} 
  className="rounded-full"
/>
<Image 
  src="/images/men3.jpg" 
  alt="Customer 3" 
  width={40} 
  height={40} 
  className="rounded-full"
/>
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-800 font-semibold">
          Customer Feedback
        </p>
        <p className="text-sm text-gray-500">
          ⭐ 4.9 <span className="text-gray-400">(18.6k Reviews)</span>
        </p>
      </div>
    </div>
  );
}
