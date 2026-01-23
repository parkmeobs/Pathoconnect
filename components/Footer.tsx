"use client";

import Image from "next/image";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import Linkedin from "../assets/images/Linkedin.png";
import YouTube from "../assets/images/Youtube.png";
import Link from "next/link";

const socialItems = [
  { label: "Facebook", image: Facebook, href: "https://www.facebook.com/people/Observance-Solutions/100067819001609/" },
  { label: "Instagram", image: Instagram, href: "#" },
  { label: "Linkedin", image: Linkedin, href: "#" },
  { label: "YouTube", image: YouTube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#e85c41] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-2xl font-bold">PATHOCONNECT</h2>

          <p className="text-sm">USA : +1 (347) 839-1487</p>
          <p className="text-sm">India : +91 9910272266</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            {socialItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}>

               
              <Image
                key={index}
                src={item.image}
                alt={item.label}
                width={40}
                height={40}
                className="cursor-pointer hover:scale-110 transition rounded bg-white p-2"
              />
               </Link>
            ))}
          </div>

          {/* Button */}
          <button className=" max-w-3xl mx-auto mt-4 border border-white px-6 py-2 rounded-full  sm:w-fit mx-auto md:mx-0">
            Contact Us
          </button>
        </div>

        {/* Product */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Order Booking Application</li>
            <li>Phlebotomy Application</li>
            <li>Rider Application</li>
            <li>Booking & Logistics Management</li>
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Solution</h3>
          <p className="text-sm hover:underline cursor-pointer">
            Pathoconnect
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-4 px-4 text-center text-sm">
        <p>
          © 2026 Observance Solutions Pvt Ltd. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <span className="hover:underline cursor-pointer">
            Privacy Policy
          </span>
          <span>|</span>
          <span className="hover:underline cursor-pointer">
            Terms of Use
          </span>
        </div>
      </div>
    </footer>
  );
}
