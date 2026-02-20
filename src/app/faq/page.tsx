"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I reschedule an appointment?",
    answer:
      "Yes, you can reschedule your appointment by contacting us. For further assistance, feel free to reach out.",
  },
  {
    question:
      "Can the phlebotomist accept or reject appointments?",
    answer:
      "Yes, phlebotomists can accept or reject appointments based on permissions configured by the super admin.",
  },
  {
    question:
      "Can the phlebotomist reschedule an appointment?",
    answer:
      "Yes, a phlebotomist has the ability to reschedule appointments.",
  },
  {
    question:
      "Can the admin and customer track the phlebotomist’s location?",
    answer:
      "Yes, both the admin and customer can track the phlebotomist’s location using GPS functionality.",
  },
  {
    question:
      "Can the admin monitor phlebotomist activities?",
    answer:
      "Yes, the admin receives notifications and status updates through the CRM for each phlebotomist activity.",
  },
  {
    question:
      "Can customers view reports in the order booking application?",
    answer:
      'Yes, customers can access their reports via the "Reports" tab in the order booking application.',
  },
  {
    question:
      "Does the phlebotomist receive notifications for new orders?",
    answer:
      "Yes, the phlebotomist receives notifications when a new order is assigned.",
  },
  {
    question:
      "Do you have barcode scanning features for sample collection?",
    answer:
      "Yes, the phlebotomist application includes barcode scanning features to ensure accurate sample collection and reduce mismatching errors.",
  },
  {
    question:
      "Do you pick up urine and stool samples?",
    answer:
      "Yes, we offer pickup services for urine and stool samples.",
  },
  {
    question:
      "How early do you come for fasting blood draws?",
    answer:
      "We provide early morning appointments and strive to accommodate your schedule.",
  },
  {
    question:
      "What happens if I forget to cancel my appointment?",
    answer:
      "No worries, you can cancel the appointment from your home as well.",
  },
  {
    question:
      "Do you provide online monitoring nursing facilities?",
    answer:
      "Yes, our care management program application offers online monitoring nursing facilities.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-white">
      <main className="flex flex-1 flex-col py-20 bg-white dark:bg-white">
        <section className="bg-gradient-to-b from-[#f8fbff] to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b2b65]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about our services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-[#1b2b65]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#e85c41]" : ""
                  }`}
                />
              </button>

              <div
                className={`px-5 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </main>
    </div>
  )
}

