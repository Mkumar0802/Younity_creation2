// pages/index.js
import Link from "next/link";
import { Photoframes } from "./photoData";
import Image from "next/image";

function Home() {
  return (
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
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {Photoframes.map((product) => (
            <div key={product.id}>
              <Link
                href={`/${product.id}`}
                className="block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3"
              >
                <Image
                  src={product.imagesource}
                  loading="lazy"
                  width={500}
                  height={500}
                  alt={`Photo by ${product.title}`}
                  className="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
                />
              </Link>

              <div className="flex flex-col">
                <span className="text-gray-500">{product.title}</span>
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  {product.title1}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
