import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-white py-8">
      <div className="max-w-7xl mx-auto px-4  md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Location 1 */}
          <div>
            <h3 className="text-blue-950 text-lg font-bold mb-2">TickVault (Karachi)</h3>
            <p>
              Dolmen Mall
              <br />
              Tariq road, Karachi
              <br />
              Pakistan
            </p>
            <Link href="#" className="text-black hover:text-white mt-2 inline-block">
              Get directions
            </Link>
          </div>
          <div>
            <h3 className="text-blue-950 text-lg font-bold mb-2">TickVault (Karachi)</h3>
            <p>
              Dolmen Mall
              <br />
              Hayderi, Karachi
              <br />
              Pakistan
            </p>
            <Link href="#" className="text-black hover:text-white mt-2 inline-block">
              Get directions
            </Link>
          </div>


          {/* Location 3 */}
          <div>
            <h3 className="text-blue-950 text-lg font-bold mb-2">TickVault (Karachi)</h3>
            <p>
              Dolmen Mall
              <br />
              Clifton, Karachi
              <br />
              Pakistan
            </p>
            <Link href="#" className="text-black hover:text-white mt-2 inline-block">
              Get directions
            </Link>
          </div>
        </div>
          

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/product" className="text-black hover:text-white">
              Shop Now
            </Link>
            <Link href="/contact" className="text-black hover:text-white">
              contact
            </Link>
            <Link href="/about" className="text-black hover:text-white">
              about
            </Link>
            <Link href="/" className="text-black hover:text-white">
              home
            </Link>
          </div>

          <div className="flex  text-center space-x-4">
            <p>© 2024 TickVault. Your rights are reserved</p>
          </div>

          
            </div>
          </div>
        

    </footer>
  );
}
