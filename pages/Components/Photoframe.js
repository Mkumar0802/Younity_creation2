import React from "react";
import { Photoframes } from "../Data/photoData";
import PhotoFrameCard from "../Card/PhotoFrameCard";
import Image from "next/image"; // Uncomment this import if you intend to use it for images

function PhotoFrame() {
  return (
    <div>
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              Collections
            </h2>

            <a
              href="#"
              className="inline-block px-4 py-2 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-lg outline-none ring-indigo-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Show more
            </a>
          </div>
          <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {Photoframes.map((photoFrame, index) => (
              <PhotoFrameCard
                key={index}
                title={photoFrame.title}
                imagesource={photoFrame.imagesource}
                title1={photoFrame.title1}
                id={photoFrame.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoFrame;
