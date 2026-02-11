import Image from "next/image";
import React from "react";
import CrmDashboard from "@/assets/images/CrmDashboard.png";

export default function Blog2() {
  return (
    <section
      style={{ backgroundColor: "#FFF7CD" }}
      className="w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col gap-12">
        {/* Heading */}
        <h1 className="max-w-4xl mx-auto text-blue text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug text-center">
          Transform Lab Management with Our Advanced CRM Dashboard
        </h1>

        {/* Content Container */}
        <div className="w-full bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="max-w-2xl flex flex flex-col gap-6 text-center lg:text-left  p-6 sm:p-8 lg:p-12">
            <p className="text-blue text-sm sm:text-base">
              In today’s fast-paced healthcare environment, labs need smarter
              systems to manage operations, streamline workflows, and improve
              patient care. That’s where our <span className="text-[var(--color-primary)]">Lab CRM Dashboard</span>  comes into play — a
              complete control panel to manage every aspect of your lab
              operations, from order scheduling to phlebotomist management.
            </p>

            <p className="text-blue text-sm sm:text-base">
              Let’s dive into the powerful features that make our <span className="text-[var(--color-primary)]">CRM solution</span> the
              perfect choice for diagnostic labs, collection centers, and
              healthcare service providers.
            </p>

            <button className="mt-6 h-12 px-8 rounded-full font-bold bg-blue text-white  hover:bg-white hover:text-blue hover:border-blue border transition-all border-blue  max-w-3xs sm:w-auto mx-auto lg:mx-0">
              Book Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={CrmDashboard}
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
