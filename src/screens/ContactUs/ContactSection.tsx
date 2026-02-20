"use client";
import Image from "next/image";
import { useState } from "react";
import ContactCard from "./ContactCard";
import CustomInputField from "@/components/CustomInputField";
import { log } from "console";

const contactLocations = [
  {
    country: "USA",
    items: [
      {
        icon: "bi bi-geo-alt-fill",
        text: "67 King George Rd, Warren, NJ 07059",
      },
      {
        icon: "bi bi-telephone-fill",
        text: "+1 (347) 839-1487",
        link: "tel:+13478391487",
      },
    ],
  },
  {
    country: "India",
    items: [
      {
        icon: "bi bi-geo-alt-fill",
        text: "Sector 62, Noida, Uttar Pradesh",
      },
      {
        icon: "bi bi-telephone-fill",
        text: "+91 98765 43210",
        link: "tel:+919876543210",
      },
    ],
  },
];

const sendEmailData =[
  {
    name: "Abhishek",
    email: "abhishek@observancegroup.com",
    phone:1234567890,
    message: "Hello, I am interested in your services. Please contact me."
  },{
    name: "John Doe",
    email: "john@observancegroup.com",
    phone:1234567890,
    message: "Hello, I am interested in your services. Please contact me."
  },{
    name: "Jane Smith",
    email: "jane@observancegroup.com",
    phone:1234567890,
    message: "Hello, I am interested in your services. Please contact me."
  },
  {
    name: "Alice Johnson",
    email: "alice@observancegroup.com",
    phone:1234567890,
    message: "Hello, I am interested in your services. Please contact me."
  },
  {
    name: "Bob Brown",
    email: "bob@observancegroup.com",
    phone:1234567890,
    message: "Hello, I am interested in your services. Please contact me."
  }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // TODO: Connect to backend API or email service
  //   setSubmitted(true);
  //   setFormData({ name: "", email: "", phone: "", message: "" });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log(formData);
    // for (const data1 of sendEmailData) {

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (data.success) {
    alert("Message sent successfully!");
  } else {
    alert("Something went wrong.");
  }
// }
};


  return (
    <section className="max-w-7xl mx-auto px-10 sm:px-8 md:px-10 lg:px-10 py-20 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-18">
      {/* Left Column: Contact Info */}
      <div className="space-y-6">
        <div>
          <h2 className="text-[36px] font-bold text-blue">Get in Touch</h2>
          <p className="text-[#4A4A4A] text-[15px] ">
            We offer SaaS-based solutions to help clinical labs scale their home
            sample collection and logistics operations efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-10">
          {contactLocations.map((location, index) => (
            <ContactCard
              key={index}
              country={location.country}
              items={location.items}
            />
          ))}
      
        </div>
            <div className="flex flex-row gap-2 items-center">
            <i
              className={`bi bi-envelope-fill w-5 h-5 flex items-center justify-center p-5 bg-primary rounded-full text-white`}
            ></i>

            <p className="text-[#212529BF] text-[15px]">
              <a
                href={"mailto:info@observancegroup.com"}
                className="hover:underline"
              >
                {"info@observancegroup.com"}
              </a>
            </p>
          </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="bg-white  p-8 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-green-600 font-semibold text-center text-lg">
            Thank you! We received your message.
          </p>
        ) : (
          <>
            <div>
              <h1 className="text-2xl font-bold text-blue mb-6">
                Send us a Message
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <CustomInputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <CustomInputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                type="email"
                required
              />

              <CustomInputField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 9910272266"
              />

              <div>
                <label className="block mb-1 font-medium text-blue">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full text-blue-900 border border-[#ccc]  rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue placeholder-[#ccc]"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-3/4 mx-auto block bg-primary hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
