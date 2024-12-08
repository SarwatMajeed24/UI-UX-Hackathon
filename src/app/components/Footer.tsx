import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    
     <div>
      <div className="flex justify-between w-[1240px] h-[180px] mx-auto relative bg-black p-6 border rounded-3xl">
        {/* Left Side - Heading */}
        <div className="w-[50%] flex items-center">
          <h1 className="font-Integral CF font-bold text-5xl text-white">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>

        {/* Right Side - Divs with Email Input and Subscribe Button */}
        <div className="flex flex-col space-x-4 items-center justify-end w-[349] h-[108] gap-4">
          {/* Email Input */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full w-[349px] h-[46px] px-3 py-2">
            <TfiEmail />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-slate-100 outline-none px-2 w-full"
            />
          </div>

          {/* Subscribe Button */}
          <div className="hidden lg:flex items-center  bg-slate-100 rounded-full w-[349px] h-[46px] px-3 py-2">
            <h1 className='font-Satoshi text-center'>Subscribe to Newsletter</h1>
          </div>
        </div>
      </div>   
        
            
        
      <footer className="bg-gray-100 text-gary-300 font-Satoshi py-12">
      <div className="container mx-auto px-6">
        {/* Top sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        <div>
            <h3 className="font-integral CF text-5xl font-bold mb-4 text-black">SHOP.CO</h3>
             <h1>We have clothes that suits your style and which you are proud to wear. From women to men</h1>
        
             <div className="flex space-x-4 w-[148] h-[28] mt-8 text-3xl">
             <Link target="blank" href="https://twitter.com"><FaTwitter className="icon2 border rounded-full" /></Link>  
                <Link target="blank" href="https://facebook.com"> <FaFacebookSquare className="icon1 border rounded-full" /></Link>                             
                <Link target="blank" href="https://instagram.com"><FaInstagram className="icon3 border rounded-full" /></Link>
                <Link target="blank" href="https://github.com" ><FaGithub className="icon4 border rounded-full" /></Link>
               
        </div>
          </div>
          
          {/* Column 1 - About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/careers" className="hover:underline">Features</Link></li>
              <li><Link href="/blog" className="hover:underline">Works</Link></li>
              <li><Link href="/blog" className="hover:underline">Career</Link></li>
            </ul>
          </div>

          {/* Column 2 - Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">Customer Support</Link></li>
              <li><Link href="/careers" className="hover:underline">Delivery Details</Link></li>
              <li><Link href="/blog" className="hover:underline">Terms and Conditions</Link></li>
              <li><Link href="/blog" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Faq</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:underline">Account</Link></li>
              <li><Link href="/shipping" className="hover:underline">Manage Deliveries</Link></li>
              <li><Link href="/contact" className="hover:underline">Orders</Link></li>
              <li><Link href="/contact" className="hover:underline">Payments</Link></li>
            </ul>
          </div>

            {/* Column 4 - Quick Links */}
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
        <div className="mt-8 border-t border-gray-700 pt-6 text-start">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shop.co © 2000-2023, All Rights Reserved</p>
          <div className='flex justify-end'>
          <Image src={"/images/paylogo/paylogo.png"} alt={"Paylogo2"} height={30} width={281} />
          </div>
        </div>
        </div>
    </footer> 
    </div>
  );
}

