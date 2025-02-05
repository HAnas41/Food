import React from "react";

export default function AboutImage() {
  return (
    <div className="relative lg:mr-10">
      <img
        src="/images/chief2.jpg" // Replace with the actual image path
        alt="Our Best Chef"
        className="w-72 h-72 object-cover rounded-full shadow-lg"
      />
      <div className="absolute -left-6 top-6 text-3xl">😊</div>
      <div className="absolute -right-8 bottom-10 text-3xl">🍕</div>
      <p className="text-center mt-4 font-medium text-gray-600">Our Best Chef 👩‍🍳</p>
    </div>
  );
}
