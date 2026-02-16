"use client";
import Image from "next/image";
import React from "react";
import CrmDashboard from "@/assets/images/CrmDashboard.png";
import BookingAndLogisticsManagement from "@/assets/images/HomeScreenTab/BookingAndLogisticsManagement.png";
import OrderBooking1 from "@/assets/images/HomeScreenTab/OrderBooking1.png";
import PhlebotomistApplication from "@/assets/images/HomeScreenTab/PhlebotomistApplication.png";
import RiderApplication from "@/assets/images/HomeScreenTab/RiderApplication.png";
import Rider from "@/assets/images/HomeScreenTab/Rider.png";
import OrderBookingApplication from "@/assets/images/HomeScreenTab/OrderBookingApplication.png";
import PhleboOrderbooking from "@/assets/images/HomeScreenTab/PhleboOrderbooking.png";

import DigitalReports from "@/assets/images/HomeScreenTab/DigitalReports.png";
import ManageFamily from "@/assets/images/HomeScreenTab/ManageFamily.png";
import NewBooking from "@/assets/images/HomeScreenTab/NewBooking.png";
import OnlinePayments from "@/assets/images/HomeScreenTab/OnlinePayments.png";
import PrescriptionUpload from "@/assets/images/HomeScreenTab/PrescriptionUpload.png";
import Search from "@/assets/images/HomeScreenTab/Search.png";
import TrackOrderStatus from "@/assets/images/HomeScreenTab/TrackOrderStatus.png";
import { motion } from "framer-motion";

const tabData = [
  {
    id: 0,
    label: "Order Booking Application",
    icon: OrderBooking1,
    contentHeading: "Order Booking Application",
    image: OrderBookingApplication,
    contentDescriptionPoints: [
      {
        name: "Search / Browse tests and view details",
        icon: Search,
      },
      {
        name: "Create new bookings",
        icon: NewBooking,
      },
      {
        name: "Manage family members profiles",
        icon: ManageFamily,
      },
      {
        name: "Track order status",
        icon: TrackOrderStatus,
      },
      {
        name: "Prescription upload",
        icon: PrescriptionUpload,
      },
      {
        name: "Online payments",
        icon: OnlinePayments,
      },
      {
        name: "Digital reports",
        icon: DigitalReports,
      },
    ],
  },
  {
    id: 1,
    label: "Phlebotomist Application",
    icon: PhlebotomistApplication,
    contentHeading: "Phlebotomist Application",
    image: PhleboOrderbooking,
    contentDescriptionPoints: [
      {
        name: "View assigned visit and perform more efficiently",
        icon: Search,
      },
      {
        name: "Barcode scanning to reduce any error",
        icon: NewBooking,
      },
      {
        name: "Digital payment / Cash collection",
        icon: ManageFamily,
      },
      {
        name: "GPS Tracking",
        icon: TrackOrderStatus,
      },
      {
        name: "Call Masking",
        icon: PrescriptionUpload,
      },
      {
        name: "Upselling",
        icon: OnlinePayments,
      },
      {
        name: "LIMS Integration",
        icon: DigitalReports,
      },
    ],
  },
  {
    id: 2,
    label: "Rider Application",
    icon: RiderApplication,
    contentHeading: "Rider Application",
    image: Rider,
    contentDescriptionPoints: [
      {
        name: "View assigned visits",
        icon: Search,
      },
      {
        name: "GPS Tracking",
        icon: TrackOrderStatus,
      },
      {
        name: "Collection and Drop with barcode scan",
        icon: PrescriptionUpload,
      },
      {
        name: "Digital / Cash payment collection",
        icon: OnlinePayments,
      },
      {
        name: "Create on demand visit",
        icon: NewBooking,
      },
    ],
  },
  {
    id: 3,
    label: "Bookings and Logistics Management",
    icon: BookingAndLogisticsManagement,
    contentHeading: "Bookings and Logistics Management",
    image: CrmDashboard,
    contentDescriptionPoints: [
      {
        name: "View assigned visits and perform more efficiently",
        icon: Search,
      },
      {
        name: "Barcode scanning to reduce any error",
        icon: NewBooking,
      },
      {
        name: "Digital payment / Cash collection",
        icon: OnlinePayments,
      },
      {
        name: "GPS Tracking",
        icon: TrackOrderStatus,
      },
      {
        name: "Call Masking",
        icon: PrescriptionUpload,
      },
      {
        name: "Upselling",
        icon: ManageFamily,
      },
      {
        name: "LIMS Integration",
        icon: DigitalReports,
      },
    ],
  },
];
function AllInOne() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="w-full  mx-auto px-4 py-5 sm:px-6 lg:px-2  ">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue text-center mt-10">
          Patho<span className="text-primary">connect</span> - All in one
          solution
        </h1>
        <p className="text-center mt-4 text-[13px] sm:text-[15px] md:text-[16px] lg:text-[16px] text-blue">
          Pathoconnect can be a valuable tool for phlebotomists and other
          healthcare professionals who need to collect blood and other samples.
          It can help them to improve their skills, stay up-to-date on the
          latest trends, and prepare for their future tech updates.
        </p>
      </div>
      <div className="max-w-7xl mx-auto  flex w-full flex-col mt-12 gap-5">
        <div className="relative flex w-full border-b-2 border-primary/30">
          {tabData.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex flex-1 py-1 px-2 sm:px-4 md:px-6 lg:px-8 sm:py-2 md:py-3 items-center justify-center"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  className="w-0 h-0 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
                <p
                  className={`text-[10px] sm:text-[10px] md:text-[12px] lg:text-[15px] font-medium text-start transition-colors duration-200 text-blue `}
                >
                  {tab.label}
                </p>
              </div>

              {/* Animated Bottom Line */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 p-10 bg-[#FAFAFA] rounded-md">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold mb-4">
              {(() => {
                const words = tabData[activeTab].contentHeading.split(" ");
                const lastWord = words.pop();
                const firstPart = words.join(" ");

                return (
                  <p className="text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px] font-bold text-blue">
                    <span className="text-blue">{firstPart} </span>
                    <span className="text-primary">{lastWord}</span>
                  </p>
                );
              })()}
            </h2>

            <ul className="list-disc list-inside text-blue gap-2 flex flex-col">
              {tabData[activeTab].contentDescriptionPoints.map((point) => (
                <div key={point.name} className="flex items-start gap-2">
                  <Image
                    src={point.icon}
                    alt={point.name}
                    className="w-8 h-8 inline-block mr-2"
                  />
                  <li className="mb-2 flex items-start gap-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-blue">
                    {point.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <Image
              //   src={CrmDashboard}
              src={tabData[activeTab].image}
              alt={tabData[activeTab].contentHeading}
              className="w-full h-150 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInOne;
