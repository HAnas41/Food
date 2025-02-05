import React from "react";
import AboutImage from "../AboutImage/AboutImage";
import AboutContent from "../AboutContent/AboutContent";
import AboutFeedback from "../AboutFeedback/AboutFeedback";


export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-end gap-40 p-8 bg-gray-50">
      <div className="flex flex-col items-center lg:items-end text-right">
        <AboutImage />
      </div>
      <div className="flex-1">
        <AboutContent />
      <AboutFeedback/>
      </div>
    </div>
  );
}
