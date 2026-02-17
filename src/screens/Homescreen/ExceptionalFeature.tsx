import React from "react";

import ExceptionalFeaturee from "@/assets/images/HomeScreenTab/ExceptionalFeature.png";
import Image from "next/image";
import DigitalReports from "@/assets/images/HomeScreenTab/DigitalReports.png";
import ManageFamily from "@/assets/images/HomeScreenTab/ManageFamily.png";
import NewBooking from "@/assets/images/HomeScreenTab/NewBooking.png";
import OnlinePayments from "@/assets/images/HomeScreenTab/OnlinePayments.png";
import PrescriptionUpload from "@/assets/images/HomeScreenTab/PrescriptionUpload.png";
import TrackOrderStatus from "@/assets/images/HomeScreenTab/TrackOrderStatus.png";

const features = [
  {
    id: 1,
    title: "View Assigned Orders",
    description:
      "Phlebotomist can see assigned orders with customer name, address, and specimen details.",
    icon: ManageFamily,
  },
  {
    id: 2,
    title: "Accept or Decline Order",
    description: "Option to accept or decline an assigned order.",
    icon: DigitalReports,
  },
  {
    id: 3,
    title: "Routes & Driving Directions",
    description:
      "View routes to customer location with real-time driving directions.",
    icon: DigitalReports,
  },
  {
    id: 4,
    title: "Call, Reschedule & Cancel",
    description:
      "Call customer and reschedule or cancel orders based on availability.",
    icon: DigitalReports,
  },
  {
    id: 5,
    title: "Real-Time Location Tracking",
    description:
      "GPS-based real-time location tracking for visibility and reporting.",
    icon: TrackOrderStatus,
  },
  {
    id: 6,
    title: "Blood Draw & Barcode Scanning",
    description: "Scan and capture barcodes for collected specimens.",
    icon: DigitalReports,
  },
  {
    id: 7,
    title: "Specimen Shipping",
    description: 'Mark order status as "Specimen Shipped".',
    icon: DigitalReports,
  },
  {
    id: 8,
    title: "Specimen Collected at Lab",
    description: 'Mark order status as "Specimen Collected at Lab".',
    icon: DigitalReports,
  },
];

function ExceptionalFeature() {
  return (
    <div className="w-full px-10 sm:px-10 md:px-20 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col w-full gap-2 items-center ">
      <h1 className=" max-w-4xl mx-auto text-center text-blue text-[25px] sm:text-[25px] md:text-[35px] lg:text-[40px]  font-semibold">
        Exceptional <span className="text-primary">Features</span> of Our Mobile
        Phlebotomy App
      </h1>
      <div className="  flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10 w-full ">
        <div className="flex flex-col flex-1">
          {features.map(
            (feature, index) =>
              index < 4 && (
                <div
                  key={feature.id}
                  className="flex flex-col gap-2 items-start my-2"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10"
                  />
                  <p className=" text-blue text-[18px]  font-[500] flex items-center justify-center">
                    {feature.title}
                  </p>
                  <p className="text-blue text-[14px]">{feature.description}</p>
                </div>
              ),
          )}
        </div>
        <div className="flex flex-1 justify-center items-center">
        <Image
          src={ExceptionalFeaturee}
          alt="Exceptional Feature"
          className="w-auto h-120 "
        />
        </div>
        <div className="flex flex-col flex-1">
          {features.map(
            (feature, index) =>
              index >= 4 && (
                <div
                  key={feature.id}
                  className="flex flex-col gap-2 items-start my-2"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10"
                  />
                  <p className=" text-blue text-[18px]  font-[500] flex items-center justify-center">
                    {feature.title}
                  </p>
                  <p className="text-blue text-[14px]">{feature.description}</p>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default ExceptionalFeature;
