import React from "react";
import HeroContent from "../HeroContent/HeroContent";
import HeroImage from "../HeroImage/HeroImage";


export default function Hero() {
  return (
    <div className="flex items-center justify-between p-8 bg-white mt-5 ">
     
      <HeroContent/>
      <HeroImage/>
    </div>
  );
}
