import AutoSlider from "@/components/AutoSlider";
import React from "react";
const data = [
  {
    id: 0,
    rating: 5,
    feedback:
      "Our phlebotomy team works across boroughs, so having a mobile-connected CRM with GPS tracking and digital documentation made a huge difference. Claims processing has also become faster and more accurate.",
    country: "India",
    customerName: "Michelle Ray",
    designation: "Lab Manager",
  },
  {
    id: 1,
    rating: 4,
    feedback:
      "Managing multiple collection zones and staff used to be a challenge. Since adopting Pathoconnect, we've been able to automate task assignments, reduce delays, and improve turnaround times. The CRM is user-friendly and designed for labs like ours.",
    country: "USA",
    customerName: "Renu Sharma",
    designation: "Lab Manager",
  },
  {
    id: 2,
    rating: 5,
    feedback:
      "Pathoconnect brings transparency and automation to every step — from order capture to invoicing. The dashboard helps us keep everything in check, and their support team is incredibly responsive.",
    country: "UK",
    customerName: "Jonathan Blake",
    designation: "Lab Owner",
  },
  {
    id: 3,
    rating: 4,
    feedback:
      "Pathoconnect helped us go paperless while still complying with our local data requirements. Our staff learned the system quickly, and our clients love the speed at which we can respond to requests.",
    country: "Australia",
    customerName: "Myke D",
    designation: "Lab Director",
  },
  {
    id: 4,
    rating: 5,
    feedback:
      "What impressed me the most is the integration with our existing billing software and the insurance claim workflow. It’s clear that Pathoconnect is built with diagnostics in mind — not just generic healthcare.",
    country: "Canada",
    customerName: "Arjun Verma",
    designation: "Lab Proprietor",
  },
];

function SuccessStories() {
  return (
    <div className="w-full  mx-auto px-4 py-10 sm:px-6 lg:px-2  ">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue">
          <span className="text-primary">Success</span> Stories
        </h1>
        <p className="text-blue">
          Uncover the experiences of our customers who have leveraged the power
          of Pathoconnect Lab Management Software
        </p>
     <AutoSlider data={data} />
      </div>
    </div>
  );
}

export default SuccessStories;
