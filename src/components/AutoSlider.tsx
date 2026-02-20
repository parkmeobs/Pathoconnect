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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full  mx-auto px-8 sm:px-8 md:px-4 lg:px-2  ">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-2 sm:px-3 py-6 sm:py-10">
            <div className="min-h-[250px] w-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl shadow-md bg-white">
              <div className="flex flex-col items-center gap-1">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  {item.country}
                </p>
                <p className="text-blue font-semibold text-sm sm:text-base">
                  {item.customerName}
                </p>
              </div>

              <p className="text-center text-gray-600 mt-4 text-xs sm:text-sm leading-relaxed">
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
