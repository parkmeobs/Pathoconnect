import Image from "next/image";
import React from "react";
import ExceptionalFeature from "@/assets/images/HomeScreenTab/ExceptionalFeature.png";
import OrderDashboard from "@/assets/images/HomeScreenTab/OrderDashboard.png";
import RealTimeStatus from "@/assets/images/HomeScreenTab/RealTimeStatus.png";
import "./Home.css";

const data = [
  {
    id: 0,
    title: "Order Dashboard to View or Capture new Orders",
    description:
      "View list of orders received from labs or add new orders on behalf of a lab. While capturing order special instructions can be added for phlebotomists. You can also attach a lab requisition document along with the order.",
    image: OrderDashboard,
  },
  {
    id: 1,
    title: "Assigned Phlebotomist",
    description:
      "View list of available phlebotomists in the area for a specific order. Select a phlebotomist to assign on an order. Phlebotomist will get push notification for a new order and they can further accept or decline the order.",
    image: ExceptionalFeature,
  },
  {
    id: 2,
    title: "Real Time Status Tracking",
    description:
      "Access to order timeline to see real time status and activities being performed on an order by the phlebotomist.",
    image: RealTimeStatus,
  },
];

function OrderManagement() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8  py-5 sm:py-5 md:py-15 lg:py-15 flex flex-col gap-5">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10 text-blue">
          <span className="text-primary ">Order Management</span> Workflow
        </h1>
        <p className="text-blue max-w-4xl mx-auto text-center  text-[13px] sm:text-[15px] md:text-[16px] lg:text-[16px]">
          {
            "Pathoconnect can be a valuable tool for phlebotomists and other healthcare professionals who need to collect blood and other samples. It can help them to improve their skills, stay up-to-date on the latest trends, and prepare for their future tech updates."
          }
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-sm mx-auto flex flex-col gap-8 sm:gap-8
                 bg-[#ECF4FF] 
                 px-6 sm:px-8 lg:px-10 
                 py-8 sm:py-10 
                 rounded-2xl 
                 transition-all duration-300 
                 hover:shadow-xl
                 items-center"
                 
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-auto h-1/2 sm:h-48 md:h-52 lg:h-56 object-contain"
              />

              <h2 className="font-bold text-base sm:text-lg text-blue text-center">
                {item.title}
              </h2>

              <p className="text-blue text-sm sm:text-base text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button className="customHover max-w-3xs mt-4 h-12 px-6 duration-300 rounded-full font-bold border border-primary bg-[#e85c41] text-white hover:bg-white hover:text-[#e85c41] transition w-full sm:w-auto mx-auto  flex flex-row items-center justify-center group ">
        <div className="bg-white group-hover:bg-primary rounded-full p-1 ml-2 mr-2 flex items-center justify-center">
          <i
            className={`bi bi-chevron-right text-primary group-hover:text-white   rounded-full  h-5 w-5 `}
          ></i>
        </div>
        <span>Request a Demo</span>
      </button>
    </div>
  );
}

export default OrderManagement;
