"use client";

import { X } from "lucide-react";
import CustomInputField from "./CustomInputField";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });
  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-10">
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="p-8">
          <h3 className="text-2xl text-blue font-semibold mb-6">
            Book your free trial today!
          </h3>

          <form className="flex flex-col gap-8">
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
              name="name"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              required
            />
            <CustomInputField
              label="Phone Number"
              name="name"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
              required
            />
            <CustomInputField
              label="Name of your Organization"
              name="name"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization Name"
              required
            />

            <div className="w-full max-w-xl">
              <label className="block mb-3 font-medium text-blue">
                Select your Organization Type *
              </label>

              <div className=" flex flex-wrap justify-between  gap-3">
                {[
                  "Solo Phlebotomist",
                  "Mobile Phlebotomy Service",
                  "Clinical Laboratory",
                  "Large Healthcare Organization",
                ].map((type, index) => (
                  <label
                    key={index}
                    className="flex w-10/22 items-center gap-2   cursor-pointer hover:bg-primary/5 transition"
                  >
                    <input
                      type="radio"
                      name="organizationType"
                      value={type}
                      className="accent-primary w-3 h-3"
                    />
                    <span className="text-blue text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button className="bg-primary text-white py-2 rounded-lg font-semibold">
              Book a Demo
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="bg-primary text-white p-8 hidden md:flex flex-col justify-center">
          <h2 className="text-3xl w-3/4 font-bold mb-6">
            {"Let's scale your business together"}
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold">45+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm">Online Support</p>
            </div>
            <div>
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-sm">Server Uptime</p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>
      </div>
    </div>
  );
}
