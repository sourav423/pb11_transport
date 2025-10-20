
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Light mode logo (black) */}
              <Image
                src="/logo.png"
                alt="PB11 Transport Logo"
                width={232}
                height={32}
                className="dark:hidden"
              />
              {/* Dark mode logo (white) */}
              <Image
                src="/logo-white.png"
                alt="PB11 Transport Logo"
                width={232}
                height={32}
                className="hidden dark:block"
              />
            </div>
            <p className="text-text-secondary text-sm">
              PB11 Transport LTD is a premier van rental service based in the UK, offering reliable and affordable solutions for your delivery and transportation needs.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick link</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a href="#" className="hover:text-primary-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact us</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>PB11 TRANSPORT LTD</li>
              <li>33 Havergate Way, Reading, RG2 0FX, United Kingdom</li>
              <li>ajayverma@pb11transport.com</li>
              <li>+44 74000 50093</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Subscribe</h4>
            <p className="text-text-secondary text-sm mb-4">
              Subscribe for update
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
              <button className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-text-secondary text-sm">
          <p>Copyright 2025 Pb11transport - All right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
