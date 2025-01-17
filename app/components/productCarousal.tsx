import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  description: string;
  price?: number;
  image: string [] ;
}

function ProductCard({ title, id, image, price }: CardProps) {
  return (
    <div className="p-6 border border-[#f8f5f4] rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col ">
      <Link
        href={`/product/${id}`} // Link to the dynamic blog post
        className="block  text-[#6e5a53] text-center py-2 px-4 rounded-2xl shadow-md hover:text-gray-950 transition-colors"
      >
        {image && image.map((imgSrc, index) => (
          <div key={index} className="mb-4 flex-shrink-0 shadow-2xl">
            <Image
              src={imgSrc}
              alt={title}
              width={350}
              height={0}
              className="w-full object-cover rounded-t-lg"
            />
          </div>
        ))}
        <div className="flex-grow mt-8">
          <h2 className="text-sm sm:text-md md:text-lg font-semibold text-gray-950 m-2">{title}</h2>
          <p className="m-2 text-blue-950">${price}</p>
        </div>
        <div className="mt-4 text-black font-bold">view product</div>
      </Link>
    </div>
  );
}

export default ProductCard;
