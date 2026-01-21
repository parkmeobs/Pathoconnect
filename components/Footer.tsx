"use client";
import Facebook from "@/assets/images/Facebook.png";
import Instagram from "@/assets/images/Instagram.png";
import Linkedin from "@/assets/images/Linkedin.png";
import YouTube from "@/assets/images/Youtube.png";
import Image from "next/image";

const socialItems = [
  { label: "Facebook", image: Facebook, href: "/product/app" },
  { label: "Instagram", image: Instagram, href: "/product/web" },
  { label: "Linkedin", image: Linkedin, href: "/product/ai" },
  { label: "YouTube", image: YouTube, href: "/product/ai" },
];
export default function Footer() {
  return (
    <footer className="bg-[#e85c41] text-white">
      <div className="w-3/4 mx-auto px-15 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Brand */}
        <div className=" flex flex-col gap-3 ">
          <h2 className="text-2xl font-bold mb-3">PATHOCONNECT</h2>
          <p className="text-sm">USA : +1 (347) 839-1487</p>
          <p className="text-sm">India : +91 9910272266</p>
          <div className="flex gap-3 mt-3  " >
            {socialItems.map((item, index) => (
              <Image
                key={index}
                src={item.image}
                alt={item.label}
                width={20}
                height={20}
                className="cursor-pointer hover:scale-110 transition-all duration-200 h-10 w-10  bg-white p-2 square-full border rounded"
              />
            ))}
          </div>

          <button className="flex items-center h-10 w-30 gap-2 mt-3 border border-white px-4 py-2 rounded-full" >Contact Us</button>

        </div>

        {/* Contact */}
       

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Order Booking Application</li>
            <li>Phlebotomy Application</li>
            <li>Rider Application</li>
            <li>Booking & Logistics Management</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
           
          </ul>
        </div>
         <div>
          <h3 className="font-semibold mb-3">Solution</h3>
          <p className="text-sm hover:underline cursor-pointer">Pathoconnect</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-4 text-center text-sm px-4">
        <p>
          Copyright © 2026 Observance Solutions Pvt Ltd - All rights reserved.
        </p>

        <div className="flex justify-center gap-4 mt-2">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span>|</span>
          <span className="hover:underline cursor-pointer">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
}
