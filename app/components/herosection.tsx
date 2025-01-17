import Image from "next/image";
import Link from "next/link";
// import "@/app/global.css"

export default function HeroSection() {
  return (
    <section className="hero-section-bg bg-gradient-to-r from-navy to-cyan-500 py-16 px-4 mb-4">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700  mb-4">
          Showing Our Best-Selling Watches
        </h1>
        <p className="text-lg text-indigo-700 font-bold mb-8">
          Explore the latest and greatest watches collection 
        </p>

        <div className="flex justify-center flex-row space-x-8 ">
          <div className="bg-transparent shadow-lg  rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src="/images/hs11.png"
              alt="watch Title 1"
              width={280}
              height={380}
              className="h-60 object-cover"
            />
          </div>

          <div className="hidden sm:block bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src="/images/hs12.jpg"
              alt="watch Title 2"
              width={400}
              height={380}
              className="h-60 w-full object-cover rounded-full"
            />
          </div>

          
          <div className="hidden sm:block bg-transparent shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <Image
              src="/images/hs13.jpg"
              alt="watch Title 2"
              width={280}
              height={380}
              className="h-60 object-cover mix-blend-hard-light"
            />
          </div>
        </div>

        <div className="mt-12">
          <Link href={"/product"} className="bg-black text-blue-500 py-6 px-12 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
}
