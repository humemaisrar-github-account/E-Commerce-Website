import React from "react";
import Image from "next/image";

function Product() {
  return (
    <main>
      <div
        className="w-full flex justify-center items-center mt-10 mb-20"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="w-[90%] lg:w-[84%]">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <span className="border-l-4 border-yellow-700 text-yellow-950 font-bold text-lg md:text-xl lg:text-2xl mb-2 lg:mb-0">
              Today's Deals
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-950 mt-4 lg:mt-0">
              Flash Sales
            </h2>
            <button className="mt-4 lg:mt-0 px-3 py-2 bg-yellow-950 text-white hover:text-black font-bold rounded-lg shadow-md hover:bg-yellow-900 transition-all duration-300">
              View All
            </button>
          </div>

          {/* Bottom section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">
            {/* Product Card */}
            <div className="flex flex-col items-center ">
              <Image
                src="/img3.jpeg"
                alt="cloth pic"
                width={250}
                height={230}
                className="w-full h-auto transition-transform duration-300 transform hover:scale-95"
              />
              <div className="mt-2 text-center">
                <span className="font-bold ">
                  Celestial Embroidered <br /> Light Blue Elegance
                </span>
                <span className="block font-bold text-yellow-950 mt-1">
                  $170
                </span>
              </div>
            </div>

            {/* Repeat similar structures for each product */}
            <div className="flex flex-col items-center">
              <Image
                src="/koyal-3.webp"
                alt="cloth pic"
                width={250}
                height={230}
                className="w-full h-auto transition-transform duration-300 transform hover:scale-95"
              />
              <div className="mt-2 text-center">
                <span className="font-bold ">
                  Midnight Mystique <br /> Black Gown
                </span>
                <span className="block font-bold text-yellow-950 mt-1">
                  $250
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/imgg2.webp"
                alt="cloth pic"
                width={250}
                height={230}
                className="w-full h-auto transition-transform duration-300 transform hover:scale-95"
              />
              <div className="mt-2 text-center">
                <span className="font-bold ">
                  Pink Blossom Elegance <br /> Gown
                </span>
                <span className="block font-bold text-yellow-950 mt-1">
                  $190
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/img11.webp"
                alt="cloth pic"
                width={250}
                height={230}
                className="w-full h-auto transition-transform duration-300 transform hover:scale-95"
              />
              <div className="mt-2 text-center">
                <span className="font-bold ">
                  Twilight Noir Pink <br /> Accent Gown
                </span>
                <span className="block font-bold text-yellow-950 mt-1">
                  $210
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
