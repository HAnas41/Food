import React from "react";

export default function AboutFeedback() {
  return (
    <div className="flex items-center justify-start lg:justify-start mt-4">
      <div className="flex items-center gap-2">
        <img
          src="/images/men1.jpg" // Replace with the actual path
          alt="Customer 1"
          className="w-10 h-10 rounded-full"
        />
        <img
          src="/images/men2.jpg"
          alt="Customer 2"
          className="w-10 h-10 rounded-full"
        />
        <img
          src="/images/men3.jpg"
          alt="Customer 3"
          className="w-10 h-10 rounded-full"
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
