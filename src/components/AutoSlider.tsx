"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Item {
  id: number;
  country: string;
  customerName: string;
  feedback: string;
}

interface Props {
  data: Item[];
}

const AutoSlider = ({ data }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
      slidesToShow: 3,        // 👈 4 ek sath visible
    slidesToScroll: 1,
    autoplay: true,         // 👈 auto slide ON
    autoplaySpeed: 2000,    // 2 sec
    arrows: false,          // optional
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto ">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-3 py-10">
            <div className="h-[300px] w-full flex flex-col justify-center items-center p-6 rounded-lg shadow-md bg-white">
              <div className="flex gap-2">
                <p className="text-blue font-semibold">
                  {item.country}
                </p>
                <p className="text-blue font-semibold">
                  {item.customerName}
                </p>
              </div>
              <p className="text-center text-gray-600 mt-2 text-sm">
                {item.feedback}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSlider;
