"use client";

import Image from "next/image";
import Link from "next/link";
import PathoLogo from "@/assets/images/PathoLogo.png";
import Phone from "@/assets/images/Phone.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 ">

        {/* Logo */}
        <Link href="/">
          <Image src={PathoLogo} alt="Logo" width={180} height={50} />
        </Link>

        {/* Menu */}
        <nav className="flex gap-8 text-gray-800 font-medium">

          {/* Home */}
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          {/* Product Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="hover:text-blue-600">Product</span>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px]">
              <Link href="/product/app" className="block px-4 py-2 hover:bg-gray-100">App</Link>
              <Link href="/product/web" className="block px-4 py-2 hover:bg-gray-100">Web</Link>
              <Link href="/product/ai" className="block px-4 py-2 hover:bg-gray-100">AI</Link>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="hover:text-blue-600">About Us</span>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px]">
              <Link href="/about/company" className="block px-4 py-2 hover:bg-gray-100">Company</Link>
              <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
              <Link href="/about/career" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="hover:text-blue-600">Blog</span>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px]">
              <Link href="/blog/tech" className="block px-4 py-2 hover:bg-gray-100">Tech</Link>
              <Link href="/blog/business" className="block px-4 py-2 hover:bg-gray-100">Business</Link>
              <Link href="/blog/design" className="block px-4 py-2 hover:bg-gray-100">Design</Link>
            </div>
          </div>

        </nav>
         <Link href="/">
          <Image src={Phone} alt="Logo" width={40} height={40} />
        </Link>

      </div>
    </header>
  );
}
