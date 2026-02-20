"use client";

import Image from "next/image";
import Facebook from "../assets/images/Facebook.png";
import Instagram from "../assets/images/Instagram.png";
import Linkedin from "../assets/images/Linkedin.png";
import YouTube from "../assets/images/Youtube.png";
import Link from "next/link";
import { productItems } from "@/utils/CommonFunction/CommanData";

const socialItems = [
  {
    label: "Facebook",
    image: Facebook,
    href: "https://www.facebook.com/people/Observance-Solutions/100067819001609/",
  },
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
              <Link key={index} href={item.href}>
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
          <Link
            href="/contact-us"
            className="inline-block max-w-3xl mt-4 border border-white px-6 py-2 rounded-full sm:w-fit md:mx-0 hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Product */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            {productItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:underline cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">
              <Link href={"/faq"} className="hover:underline cursor-pointer">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-3">Solution</h3>
          <Link href="/" className="text-sm hover:underline cursor-pointer">
            Pathoconnect
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 py-4 px-4 text-center text-sm">
        <p>© 2026 Observance Solutions Pvt Ltd. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-2 mt-2 text-sm">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
