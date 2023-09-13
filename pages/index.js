// pages/index.js
import Link from "next/link";

import Image from "next/image";

const Photoframes = [
  {
    id: "1",
    imagesource:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
    title: "Mens",
    title1: "Business Causual",
    innertitle: "Fancy Brand",
    innertitle1: "Pullover with pattern",
    productpics1:
      "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
    rating: "4",
    colour: "black,blue,grey,white",
    size: "XS,S,M,L,Xl",
    shipingdays: "2-4 Days",
    description:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    description1:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
  },
  {
    id: "2",
    imagesource:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
    title: "Women",
    title1: "Summer Season",
    innertitle: "Fancy Brand",
    innertitle1: "Pullover with pattern",
    productpics1:
      "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
    rating: "4",
    colour: "black,blue,grey,white",
    size: "XS,S,M,L,Xl",
    shipingdays: "2-4 Days",
    description:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    description1:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
  },
  {
    id: "3",
    imagesource:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
    title: "Mens",
    title1: "Streetwear",
    innertitle: "Fancy Brand",
    innertitle1: "Pullover with pattern",
    productpics1:
      "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
    rating: "4",
    colour: "black,blue,grey,white",
    size: "XS,S,M,L,Xl",
    shipingdays: "2-4 Days",
    description:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    description1:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
  },
  {
    id: "4",
    imagesource:
      "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
    title: "Mens",
    title1: "Sale",
    innertitle: "Fancy Brand",
    innertitle1: "Pullover with pattern",
    productpics1:
      "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
    rating: "4",
    colour: "black,blue,grey,white",
    size: "XS,S,M,L,Xl",
    shipingdays: "2-4 Days",
    description:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    description1:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
  },
  {
    id: "5",
    imagesource:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
    title: "Mens",
    title1: "Business Causual",
    innertitle: "Fancy Brand",
    innertitle1: "Pullover with pattern",
    productpics1:
      "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
    rating: "4",
    colour: "black,blue,grey,white",
    size: "XS,S,M,L,Xl",
    shipingdays: "2-4 Days",
    description:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    description1:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
  },
  {
    id: "6",
    imagesource:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700",
    title: "Mens",
    title1: "Business Causual",
    innertitle: "Fancy Brand",
    innertitle1: "Pullover with pattern",
    productpics1:
      "https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250",
    productpics2:
      "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
    rating: "4",
    colour: "black,blue,grey,white",
    size: "XS,S,M,L,Xl",
    shipingdays: "2-4 Days",
    description:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    description1:
      "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
  },
];

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
