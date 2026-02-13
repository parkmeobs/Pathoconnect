import React from "react";
import WhoWeAre1 from "@/assets/images/WhoWeAre1.png";
import WhoWeAre2 from "@/assets/images/WhoWeAre2.png";
import WhoWeAre3 from "@/assets/images/WhoWeAre3.png";
import Image from "next/image";

const data = [
  {
    name: "Who We Are",
    heading: "At Patho Connect, we take our goals and aspirations seriously!",
    subheading:
      "At Patho Connect, we’re driven by purpose—turning our goals into impactful actions and transforming aspirations into lasting success through innovation, dedication, and unwavering commitment.",
    image: WhoWeAre1,
  },
  {
    name: "Our Mission",
    heading: "Empowering health through seamless phlebotomy solutions.",
    subheading:
      "Empowering health through efficient, accurate, and patient-friendly phlebotomy solutions—streamlining diagnostics & enhancing care.",
    image: WhoWeAre2,
  },
  {
    name: "Our Vision",
    heading: "we take our goals and aspirations seriously!",
    subheading:
      "Our goals aren’t just ideas—they’re commitments. We strive with passion, precision, and purpose to turn aspirations into achievements.",
    image: WhoWeAre3,
  },
];

function WHoAre() {
  return (
    <div className="max-w-5xl mx-auto my-20">
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-2">
          {index % 2 === 0 && (
            <div>
              <Image src={item.image} alt={item.name} className="w-[430px]" />
            </div>
          )}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-4 flex-row "
            //  border-b-1 border-primary 
             >
            <h1 className="text-2xl font-bold text-primary">{item.name}</h1>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-[21px] font-bold text-blue">{item.heading}</h2>
            <p className="text-sm text-blue">{item.subheading}</p>
          </div>
          {index % 2 !== 0 && (
            <div>
              <Image src={item.image} alt={item.name} className="w-[430px]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default WHoAre;
