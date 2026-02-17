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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 ">
        <h1 className="text-3xl font-bold text-center mt-10 text-blue">
          Improve <span className="text-primary">TAT</span> for Specimen
          Collections
        </h1>
        <div className="flex  gap-10 mt-10">
          <div>
            {data.map((item) => (
              <div key={item.id} className="mb-10 flex items-start max-w-4xl">
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="inline-block mr-4 w-auto h-10"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-[17px] font-semibold inline-block text-blue">
                    {item.title}
                  </h2>
                  <p className="text-blue text-[14px] ">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={ImproveImg}
              alt="Improve TAT"
              width={800}
              height={400}
              className="mx-auto mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImproveTat;
