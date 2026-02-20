import React from "react";
import Empower from "@/assets/images/HomeScreenTab/Empower.png";
import AutoAndManual from "@/assets/images/HomeScreenTab/AutoAndManual.png";
import RealTime from "@/assets/images/HomeScreenTab/RealTime.png";
import ImproveImg from "@/assets/images/HomeScreenTab/ImproveImg.png";
import Image from "next/image";

const data = [
  {
    id: 0,
    title: "Empower Phlebotomists with an App",
    description:
      "Manage orders and collect samples with a dedicated app. Access patient details like name, address, sample collection request. Optimize routing and record depositions after collecting samples.",
    icon: Empower,
  },
  {
    id: 1,
    title: "Auto and Manual Order Allocation",
    description:
      "Manage orders and collect samples with a dedicated app. Access patient details like name, address, sample collection request. Optimize routing and record depositions after collecting samples.",
    icon: AutoAndManual,
  },
  {
    id: 2,
    title: "Real-time End-to-end Visibility",
    description:
      "Manage orders and collect samples with a dedicated app. Access patient details like name, address, sample collection request. Optimize routing and record depositions after collecting samples.",
    icon: RealTime,
  },
];

function ImproveTat() {
  return (
    <div className="w-full  py-10 ">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-8 lg:px-8 ">
        <h1 className="text-3xl font-bold text-center mt-10 text-blue">
          Improve <span className="text-primary">TAT</span> for Specimen
          Collections
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-9 md:gap-10 lg:gap-12 mt-10 items-center lg:items-start">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {data.map((item) => (
              <div key={item.id} className="mb-8 flex items-start max-w-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="mr-4 w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />

                <div className="flex flex-col gap-2">
                  <h2 className="text-[16px] sm:text-[18px] font-semibold text-blue">
                    {item.title}
                  </h2>
                  <p className="text-blue text-[13px] sm:text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={ImproveImg}
              alt="Improve TAT"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImproveTat;
