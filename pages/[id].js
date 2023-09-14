// pages/[id].js
import { useRouter } from "next/router";
import Image from "next/image";

const catType = [
  {
    id: "1",
    imagesource:
      "https://kmk.s7rtechnology.in/600x700mainpic/Digitalpaint600x700.jpg",
    title: "Digital artwork",
    title1: "Digital Painting",
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
      "https://kmk.s7rtechnology.in/600x700mainpic/Pencilart600x700.jpg",
    title: "Pencil sketch",
    title1: "Pencil portrait",
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
      "https://kmk.s7rtechnology.in/600x700mainpic/watercolorpainting600x700.jpg",
    title: "Watercolor artwork",
    title1: "Watercolor painting",
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
      "https://kmk.s7rtechnology.in/600x700mainpic/paintingpic1600x700.jpg",
    title: "Oil-based art",
    title1: "Oil color painting",
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

function Category() {
  const router = useRouter();
  const { id } = router.query;

  // Assuming catType is an array of categories as you provided in Categories.js
  const category = catType.find((cat) => cat.id === id);

  if (!category) {
    // Handle case when the category with the specified ID is not found
    return <div>Category not found</div>;
  }

  const handleItemClick = () => {
    // Use the router object to navigate to the dynamic route.
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <h1>{category.title1}</h1>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <div
            onClick={handleItemClick}
            class="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
          >
            <Image
              src={category.imagesource}
              loading="lazy"
              alt="Photo by Vladimir Fedotov"
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              width={500}
              height={500}
            />
          </div>

          <div class="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
            <div class="flex flex-col">
              <a
                href="#"
                class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
              >
                Lavish Outfit
              </a>
              <span class="text-sm text-gray-500 lg:text-base">
                by Lavish Brand
              </span>
            </div>

            <div class="flex flex-col items-end">
              <span class="font-bold text-gray-600 lg:text-lg">$49.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
