"use client";

import { useState } from "react";
import { QuestionComponent } from "@/screens/Homescreen/QuestionComponent";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#ffece7] w-full py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black text-center mb-8">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="w-full  rounded-xl  divide-y">
          <QuestionComponent
            question="Can I reschedule an appointment?"
            answer="Yes, you can reschedule your appointment by contacting us. For further assistance, feel free to reach out."
            isOpen={openIndex === 0}
            onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
          />

          <QuestionComponent
            question="Can the phlebotomist accept or reject appointments?"
            answer="Yes, phlebotomists can accept or reject appointments based on permissions configured by the super admin."
            isOpen={openIndex === 1}
            onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
          />

          <QuestionComponent
            question="Can the phlebotomist reschedule an appointment?"
            answer="Yes, a phlebotomist has the ability to reschedule appointments."
            isOpen={openIndex === 2}
            onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}
          />
        </div>
      </div>
    </section>
  );
}
