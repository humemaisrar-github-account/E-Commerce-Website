import React from "react";
import Image from "next/image";

function Productt() {
  return (
    <div
      className="w-full flex justify-center items-center mt-10 mb-20"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="w-[90%] lg:w-[84%]">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <span className="border-l-4 border-yellow-700 text-yellow-950 font-bold text-lg md:text-xl lg:text-2xl mb-2 lg:mb-0">
            This Month's Best
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-950 mt-4 lg:mt-0">
            Best Selling Dresses
          </h2>
          <button className="mt-4 lg:mt-0 px-3 py-2 bg-yellow-950 text-white hover:text-black font-bold rounded-lg shadow-md hover:bg-yellow-900 transition-all duration-300">
            View All
          </button>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
          {/* Product Card */}
          <div className="w-full flex flex-col items-center overflow-hidden">
            <Image
              src="/resized_img1.jpg"
              alt="cloth pic"
              width={250}
              height={230}
              className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-95"
            />
            <div className="mt-2 text-center">
              <span className="font-bold group-hover:text-sm transition-all duration-300">
                Blush Grace Attire <br /> Royale
              </span>
              <span className="block font-bold text-yellow-950 mt-1">$150</span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <Image
              src="/resized_img2.jpg"
              alt="cloth pic"
              width={250}
              height={230}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-95"
            />
            <div className="mt-2 text-center">
              <span className="font-bold">
                Aqua Serenity Ensemble <br /> Luxe
              </span>
              <span className="block font-bold text-yellow-950 mt-1">$110</span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <Image
              src="/imagee.jpg"
              alt="cloth pic"
              width={250}
              height={230}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-95"
            />
            <div className="mt-2 text-center">
              <span className="font-bold">
                Blush Grace Attire <br /> Elegance
              </span>
              <span className="block font-bold text-yellow-950 mt-1">$140</span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <Image
              src="/khalii.jpg"
              alt="cloth pic"
              width={250}
              height={230}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-95"
            />
            <div className="mt-2 text-center">
              <span className="font-bold">
                Aqua Serenity Ensemble <br /> Elegance
              </span>
              <span className="block font-bold text-yellow-950 mt-1">$110</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productt;
