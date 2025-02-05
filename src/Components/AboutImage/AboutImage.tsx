import React from "react";
import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative lg:mr-10">
      <Image 
  src="/images/chief2.jpg" 
  alt="Our Best Chef" 
  width={288} // 72 * 4 (Tailwind uses REM, Next.js uses PX)
  height={288} 
  className="object-cover rounded-full shadow-lg"
/>
      <div className="absolute -left-6 top-6 text-3xl">😊</div>
      <div className="absolute -right-8 bottom-10 text-3xl">🍕</div>
      <p className="text-center mt-4 font-medium text-gray-600">Our Best Chef 👩‍🍳</p>
    </div>
  );
}
