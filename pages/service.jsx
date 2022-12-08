import React from "react";
import Image from "next/image";

function ServicePage() {
  return (
    <div className="bg-[#a27777] ">
      <div className="">
        <section className="container w-full h-full py-10 mx-auto sm:py-16 ">
          <div
            className="
		sm:bg-[url('https://res.cloudinary.com/drywqd3hf/image/upload/v1670406562/vector4_hiwn0g.svg')]  h-full w-full bg-cover bg-no-repeat  rounded-xl "
          >
            <div className="relative z-40 px-8 py-20 xl:px-20 2xl:mx-auto 2xl:container">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Stories from blog
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis.
                </p>
              </div>

              <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
                <div className="flex flex-col overflow-hidden bg-[#ece0e0] shadow-md rounded-xl">
                  <div className="flex flex-col justify-between flex-1 px-5 py-6">
                    <div className="flex-shrink-0">
                      <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                        {" "}
                        Lifestyle{" "}
                      </span>
                    </div>

                    <div className="flex-1 mt-28">
                      <p className="text-2xl font-semibold">
                        <a href="#" title="" className="text-black">
                          {" "}
                          Power of habit: How to learn anything in 30 days.{" "}
                        </a>
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200">
                    <div className="flex">
                      <div className="flex items-center flex-1 px-6 py-5">
                        <Image
                          className="object-cover w-8 h-8 rounded-full"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-1.jpg"
                          alt="sample image"
                        />
                        <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                          {" "}
                          Wade Warren{" "}
                        </span>
                      </div>

                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-[#ece0e0]  border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                      >
                        Read more
                        <svg
                          className="w-5 h-5 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden bg-[#ece0e0]  shadow-md rounded-xl">
                  <div className="flex flex-col justify-between flex-1 px-5 py-6">
                    <div className="flex-shrink-0">
                      <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                        {" "}
                        Technology{" "}
                      </span>
                    </div>

                    <div className="flex-1 mt-28">
                      <p className="text-2xl font-semibold">
                        <a href="#" title="" className="text-black">
                          {" "}
                          10 Zoom hacks you can do for productive meetings.{" "}
                        </a>
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200">
                    <div className="flex">
                      <div className="flex items-center flex-1 px-6 py-5">
                        <Image
                          className="object-cover w-8 h-8 rounded-full"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-2.jpg"
                          alt="sample image"
                        />
                        <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                          {" "}
                          Leslie Alexander{" "}
                        </span>
                      </div>

                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-[#ece0e0]  border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                      >
                        Read more
                        <svg
                          className="w-5 h-5 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden bg-[#ece0e0]  shadow-md rounded-xl">
                  <div className="flex flex-col justify-between flex-1 px-5 py-6">
                    <div className="flex-shrink-0">
                      <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                        {" "}
                        Marketing{" "}
                      </span>
                    </div>

                    <div className="flex-1 mt-28">
                      <p className="text-2xl font-semibold">
                        <a href="#" title="" className="text-black">
                          {" "}
                          6 Product launching emails you want to use next.{" "}
                        </a>
                      </p>
                      <p className="mt-4 text-base text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200">
                    <div className="flex">
                      <div className="flex items-center flex-1 px-6 py-5">
                        <Image
                          className="object-cover w-8 h-8 rounded-full"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/3/avatar-3.jpg"
                          alt="sample image"
                        />
                        <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                          {" "}
                          Jenny Wilson{" "}
                        </span>
                      </div>

                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-[#ece0e0]  border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                      >
                        Read more
                        <svg
                          className="w-5 h-5 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ServicePage;
