// pages/[id].js
import { useRouter } from "next/router";
import Image from "next/image";

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

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
      productpics3:
        "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
      rating: "4",
      colour: "black,blue,grey,white",
      size: "XS,S,M,L,Xl",
      shipingdays: "2-3 Days",
      price: "1500",
      offer: "1209",
      description:
        "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
      description1:
        "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    },
    {
      id: "2",
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
      productpics3:
        "https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250",
      rating: "4",
      price: "1200",
      offer: "1209",
      colour: "black,blue,grey,white",
      size: "XS,S,M,L,Xl",
      shipingdays: "2-4 Days",
      description:
        "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
      description1:
        "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
    },
  ];

  // Ensure id is an integer and not undefined
  const productId = id;
  console.log(productId);
  // Check for invalid id
  if (typeof productId === "undefined" || isNaN(productId)) {
    return <div>Invalid product ID</div>;
  }

  console.log("ID from URL:", id);

  // Find the product by id
  const product = Photoframes.find((item) => item.id === productId);

  console.log(Photoframes);
  console.log("Matching Product:", product);

  // Check if the product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 mx-auto md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-gray-100 rounded-lg">
                <Image
                  src={product.productpics1}
                  loading="lazy"
                  width={500}
                  height={500}
                  alt="Photo by Himanshu Dewangan"
                  className="object-cover object-center w-full h-full"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  sale
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={product.productpics2}
                    loading="lazy"
                    width={500}
                    height={500}
                    alt="Photo by Himanshu Dewangan"
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className="overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={product.productpics3}
                    loading="lazy"
                    width={500}
                    height={500}
                    alt="Photo by Himanshu Dewangan"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  Fancy Brand
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  Pullover with pattern
                </h2>
              </div>

              <div className="flex items-center mb-6 md:mb-10">
                <div className="-ml-1 flex gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span className="ml-2 text-sm text-gray-500">4.2</span>

                <a
                  href="#"
                  className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  view all 47 reviews
                </a>
              </div>

              <div className="mb-4 md:mb-6">
                <span className="inline-block mb-3 text-sm font-semibold text-gray-500 md:text-base">
                  Color
                </span>

                <div className="flex flex-wrap gap-2">
                  <span className="w-8 h-8 transition duration-100 bg-gray-800 border rounded-full ring-2 ring-gray-800 ring-offset-1"></span>
                  <button
                    type="button"
                    className="w-8 h-8 transition duration-100 bg-gray-500 border rounded-full ring-2 ring-transparent ring-offset-1 hover:ring-gray-200"
                  ></button>
                  <button
                    type="button"
                    className="w-8 h-8 transition duration-100 bg-gray-200 border rounded-full ring-2 ring-transparent ring-offset-1 hover:ring-gray-200"
                  ></button>
                  <button
                    type="button"
                    className="w-8 h-8 transition duration-100 bg-white border rounded-full ring-2 ring-transparent ring-offset-1 hover:ring-gray-200"
                  ></button>
                </div>
              </div>

              <div className="mb-8 md:mb-10">
                <span className="inline-block mb-3 text-sm font-semibold text-gray-500 md:text-base">
                  Size
                </span>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-8 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border rounded-md hover:bg-gray-100 active:bg-gray-200"
                  >
                    XS
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-8 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border rounded-md hover:bg-gray-100 active:bg-gray-200"
                  >
                    S
                  </button>
                  <span className="flex items-center justify-center w-12 h-8 text-sm font-semibold text-center text-white bg-indigo-500 border border-indigo-500 rounded-md cursor-default">
                    M
                  </span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-8 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border rounded-md hover:bg-gray-100 active:bg-gray-200"
                  >
                    L
                  </button>
                  <span className="flex items-center justify-center w-12 h-8 text-sm font-semibold text-center text-gray-400 bg-white border border-transparent rounded-md cursor-not-allowed">
                    XL
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    ₹ {product.price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    ₹ {product.offer}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  incl. VAT plus shipping
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>

                <span className="text-sm">{product.shipingdays}</span>
              </div>

              <div className="flex gap-2.5">
                <a
                  href="#"
                  className="flex-1 inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                >
                  Add to cart
                </a>

                <a
                  href="#"
                  className="inline-block px-4 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-10 md:mt-16 lg:mt-20">
                <div className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>

                <p className="text-gray-500">
                  {product.description}
                  <br />
                  <br />
                  {product.description1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
