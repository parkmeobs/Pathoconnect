import Image from "next/image";
import React from "react";
import ExceptionalFeature from "@/assets/images/HomeScreenTab/ExceptionalFeature.png";
import OrderDashboard from "@/assets/images/HomeScreenTab/OrderDashboard.png";
import RealTimeStatus from "@/assets/images/HomeScreenTab/RealTimeStatus.png";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8  py-10 sm:py-10 md:py-15 lg:py-20 flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center mt-10 text-blue">
          <span className="text-primary">Order Management</span> Workflow
        </h1>
        <p className="text-blue max-w-4xl mx-auto text-center  text-[13px] sm:text-[15px] md:text-[16px] lg:text-[16px]">
          {
            "Pathoconnect can be a valuable tool for phlebotomists and other healthcare professionals who need to collect blood and other samples. It can help them to improve their skills, stay up-to-date on the latest trends, and prepare for their future tech updates."
          }
        </p>
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-6 bg-[#ECF4FF] px-10 pt-10 pb-15 rounded-[15px]">
              <Image src={item.image} alt={item.title} className="w-auto h-60 object-contain"  />
              <h2 className="font-bold text-[17px] text-blue text-center">{item.title}</h2>
              <p className="text-blue text-[14px] text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderManagement;
