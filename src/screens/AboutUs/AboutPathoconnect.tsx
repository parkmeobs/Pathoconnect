import React from "react";
import AboutUsBanner from "@/assets/images/AboutUsBanner.png";
import Image from "next/image";
// import Video1 from "@/assets/images/Video1.mp4";

function AboutPathoconnect() {
  return (
    <section
      style={{
        backgroundImage: `url(${AboutUsBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        backgroundBlendMode: "color",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
      }}
      className="w-full bg-cover  bg-center bg-no-repeat"
    >
      <div className="w-full h-full  backdrop-blur-sm rounded-2xl gap-12 mx-auto  px-12 sm:px-8 lg:px-0 py-12">
        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2    rounded-2xl  gap-12 mx-auto  px-12 sm:px-8 lg:px-8 py-12 lg:py-15">
          <div className="gap-4 flex flex-col max-w-3xl  ">
            <h1 className="text-blue text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              About <span className="text-primary">PathoConnect</span>
            </h1>

            <p className="text-blue font-[450] text-[16px] font-[Roboto] ">
              Patho Connect is a cutting-edge phlebotomy app designed to empower
              healthcare professionals in their vital blood collection duties.
              With its user-friendly interface and comprehensive features.
            </p>
          </div>
          <div className="flex  justify-center items-center ">
            <video
              src="/Video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              controlsList="nodownload  noplaybackrate nofullscreen noremoteplayback "
              className="w-120 sm:w-80 lg:w-120 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPathoconnect;
