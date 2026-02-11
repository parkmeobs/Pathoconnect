"use client";
import Image from "next/image";
import BackBlurImage from "@/assets/images/BackBlurImage.png";
import HomeScreenMobileImage from "@/assets/images/HomeScreenMobileImage.png";
export function BannerSection() {
  return (
    <section
      style={{ backgroundImage: `url(${BackBlurImage.src})` }}
      className="w-full  bg-cover bg-center bg-no-repeat"
    >
      <div className=" max-w-7xl   mx-auto   px-4 sm:px-6   py-20   grid   grid-cols-1 md:grid-cols-2   gap-10 md:gap-20   items-center">
        {/* Text */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-snug">
            Simplifying <span className="text-[var(--color-primary)]">Phlebotomy</span>,
            Empowering Diagnostics
          </h1>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            Pathoconnect enables seamless sample collection, real-time tracking,
            and operational efficiency for labs and diagnostic centers.
          </p>

          <button className="max-w-3xs mt-4 h-12 px-6 rounded-full font-bold border border-primary bg-[#e85c41] text-white hover:bg-white hover:text-[#e85c41] transition w-full sm:w-auto mx-auto md:mx-0">
            Request a Demo
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={HomeScreenMobileImage}
            alt="PathoConnect Dashboard"
            // width={500}
            priority
            className="w-full   max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
