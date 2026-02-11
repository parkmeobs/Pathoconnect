"use client"; 
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Connect to backend API or email service
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
      
      {/* Left Column: Contact Info */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We offer SaaS-based solutions to help clinical labs scale their home
          sample collection and logistics operations efficiently.
        </p>

        {/* USA Office */}
        <div>
          <h3 className="text-xl font-semibold text-orange-600">USA</h3>
          <p className="text-gray-600 dark:text-gray-400">
            67 King George Rd, Warren, NJ 07059
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Phone: <a href="tel:+13478391487" className="underline">+1 (347) 839-1487</a>
          </p>
        </div>

        {/* India Office */}
        <div>
          <h3 className="text-xl font-semibold text-orange-600">India</h3>
          <p className="text-gray-600 dark:text-gray-400">
            B2 1227-1228, DLF MyPad, Vibhuti Khand, Gomti Nagar, Lucknow, UP, 226010
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Phone: <a href="tel:+919910272266" className="underline">+91 9910272266</a>
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-600 dark:text-gray-400">
            Email: <a href="mailto:info@observancegroup.com" className="underline">info@observancegroup.com</a>
          </p>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-green-600 font-semibold text-center text-lg">
            Thank you! We received your message.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="+91 9910272266"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
