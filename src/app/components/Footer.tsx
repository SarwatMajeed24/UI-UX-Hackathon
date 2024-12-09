import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <div>
      {/* Main Footer Section */}
      <div className="bg-black text-white p-6 rounded-2xl ml-12 mr-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side - Heading */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
          </div>

          {/* Right Side - Divs with Email Input and Subscribe Button */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end space-y-4">
            {/* Email Input */}
            <div className="flex items-center bg-slate-100 rounded-full w-full sm:w-[349px] h-[46px] px-3 py-2">
              <TfiEmail className="text-xl text-gray-600" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-slate-100 outline-none px-2 w-full"
              />
            </div>

            {/* Subscribe Button */}
            <div className="flex items-center bg-slate-100 rounded-full w-full sm:w-[349px] h-[46px] px-3 py-2">
              <h1 className="font-Satoshi text-center text-gray-600">Subscribe to Newsletter</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-gray-100 text-gray-700 font-Satoshi py-12">
        <div className="container mx-auto px-6">
          {/* Top sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
         
            {/* Shop.co Description */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">SHOP.CO</h3>
              <p className="text-gray-600 mb-4">
                We have clothes that suit your style, from casual to formal, and are designed to make you proud.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 text-2xl sm:text-3xl mt-4">
                <Link href="https://twitter.com" target="blank"><FaTwitter className="text-gray-700 hover:text-blue-500" /></Link>
                <Link href="https://facebook.com" target="blank"><FaFacebookSquare className="text-gray-700 hover:text-blue-600" /></Link>
                <Link href="https://instagram.com" target="blank"><FaInstagram className="text-gray-700 hover:text-pink-500" /></Link>
                <Link href="https://github.com" target="blank"><FaGithub className="text-gray-700 hover:text-black" /></Link>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/careers" className="hover:underline">Features</Link></li>
                <li><Link href="/blog" className="hover:underline">Works</Link></li>
                <li><Link href="/blog" className="hover:underline">Career</Link></li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">Customer Support</Link></li>
                <li><Link href="/careers" className="hover:underline">Delivery Details</Link></li>
                <li><Link href="/blog" className="hover:underline">Terms and Conditions</Link></li>
                <li><Link href="/blog" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Faq</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="hover:underline">Account</Link></li>
                <li><Link href="/shipping" className="hover:underline">Manage Deliveries</Link></li>
                <li><Link href="/contact" className="hover:underline">Orders</Link></li>
                <li><Link href="/contact" className="hover:underline">Payments</Link></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/faq" className="hover:underline">Free eBooks</Link></li>
                <li><Link href="/shipping" className="hover:underline">Development Tutorial</Link></li>
                <li><Link href="/contact" className="hover:underline">How to- Blog</Link></li>
                <li><Link href="/contact" className="hover:underline">Youtube Playlist</Link></li>
              </ul>
            </div>

          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-300 pt-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Shop.co, All Rights Reserved</p>
            <div>
              <Image src="/images/paylogo/paylogo.png" alt="Payment Logo" height={30} width={281} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
