"use client";
import BlogBgImage from "@/assets/images/BlogBgImage.png";
import HomeScreenMobileImage from "@/assets/images/HomeScreenMobileImage.png";
import Image from "next/image";

const featureList = [
  { name: "View Assigned Orders" },
  { name: "Real-Time Location Tracking" },
  { name: "Specimen Collection at Lab" },
  { name: "Accept or Decline Orders" },
  { name: "Specimen Shipping Management" },
  { name: "Blood Draw & Barcode Scanning" },
];

export default function Blog1() {
  return (
    <section
      style={{ backgroundImage: `url(${BlogBgImage.src})` }}
      className="w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col gap-12">
        {/* Heading */}
        <h1 className="max-w-4xl mx-auto text-blue text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug text-center">
          Phlebotomy App and Sample Collection Software for Clinical Pathology
        </h1>

        {/* Content Container */}
        <div className="w-full bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="max-w-2xl flex flex flex-col gap-6 text-center lg:text-left  p-6 sm:p-8 lg:p-12">
            <h2 className="text-blue text-xl sm:text-2xl lg:text-2.5xl font-medium">
              Advanced Phlebotomy App & Sample Collection Software
            </h2>

            <p className="text-blue text-sm sm:text-base">
              PathoConnect is a cutting-edge phlebotomy app designed to empower
              healthcare professionals in their vital blood collection duties.
              With its user-friendly interface and comprehensive features.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
              {featureList.map((feature, index) => (
                <p
                  key={index}
                  className="text-blue bg-blue/5 backdrop-blur-sm rounded-2xl rounded-xl px-4 py-3 text-md hover:shadow-lg transition"
                  // className="text-blue border border-blue rounded-xl px-4 py-3 text-md "
                >
                  {feature.name}
                </p>
              ))}
            </div>

            <button className="mt-6 h-12 px-8 rounded-full font-bold bg-blue text-white  hover:bg-white hover:text-blue hover:border-blue border transition-all border-blue  max-w-3xs sm:w-auto mx-auto lg:mx-0">
              Book Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={HomeScreenMobileImage}
              alt="Mobile App Preview"
              className="w-64 sm:w-80 lg:w-96 h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
