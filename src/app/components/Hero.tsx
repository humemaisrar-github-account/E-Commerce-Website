import Image from "next/image";
import React from "react";
import { GiAmpleDress } from "react-icons/gi";

function Hero() {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[250px] sm:h-[300px] md:h-[380px] mt-16">
      <Image
        src="/frontimg.jpg"
        alt="Description"
        layout="fill"
        objectFit="cover"
        data-aos="fade-up"
        data-aos-duration="3000"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-yellow-950 text-lg sm:text-xl md:text-2xl font-bold p-4 flex flex-col items-start space-y-2">
        <div className="flex items-center" data-aos="fade-right">
          <GiAmpleDress className="mr-2" />
          <span>Rare Collection</span>
        </div>
        <span className="sm:ml-4 md:ml-8" data-aos="fade-right">
          Up to 20% off
        </span>
        <button
          className="sm:ml-8 md:ml-12 font-thin text-sm underline hover:shadow-lg mt-3 sm:mt-5"
          data-aos="fade-right"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
export default Hero;
