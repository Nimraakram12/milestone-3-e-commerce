import Link from "next/link";
import Image from "next/image";
export default function About(){
    return(
       <>
       <section className="bg-bg py-16 px-8">
  <h1 className="text-4xl font-bold text-blue-950 text-center">About TickVault Watches   </h1>
</section>
<section className="bg-blue-950/10 py-8 px-8">
  <p className="text-xl text-blue-950 text-center max-w-2xl mx-auto">
  With a passion for quality and craftsmanship, we partner with renowned brands and emerging designers to bring you the finest selections. Whether you’re searching for the perfect gift, a statement piece, or a durable companion for everyday wear, our commitment to customer satisfaction ensures a seamless shopping experience tailored to your needs.

Explore our collection and discover the watch that defines your time
  </p>
</section>
<section className="bg-bg py-12 px-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div>
      <Image src="/images/abt6.jpg" alt="Innovation Image" 
      width={100} height={100} className="mx-auto mb-4 rounded-full"/>
      <h3 className="text-2xl font-bold text-blue-950">Vision</h3>
      <p className="text-black">Our vision is to become target our customer with eyecatching watches</p>
    </div>
    <div>
      <Image src="/images/abt4.jpg" alt="Quality Image"
      width={100} height={100} className="mx-auto mb-4 rounded-lg"/>
      
      <h3 className="text-2xl font-bold text-blue-950">Quality</h3>
      <p className="text-black">Our watches are hancrafted wuth the finest materials.</p>
    </div>
    <div>
      <Image src="/images/abt5.jpg" alt="Community Image" 
      width={100} height={100} className="mx-auto mb-4 rounded-full"/>
      <h3 className="text-2xl font-bold text-blue-950">Customer Focus</h3>
      <p className="text-black">We are committed to providing exceptional customer service.</p>
    </div>
  </div>
</section>
<section className="bg-bg py-8 px-8 text-center">
  <Link href="/product">
  <button className=" mt-7 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-cyan-500 text-2xl p-2 px-7 shadow-x-2xl transition-shadow">
  Explore Our Collection
          </button>
    
  </Link>
</section>
</>
    )
}