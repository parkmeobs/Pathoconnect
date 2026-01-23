import Image from "next/image";
import BackBlurImage from "@/assets/images/BackBlurImage.png";
import ContactPerson from "@/assets/images/ContactPerson.png";
import ContactSection from "./ContactSection";

export default function ContactUs() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col py-20 bg-white dark:bg-black">
        <section
          style={{
            backgroundImage: `url(${BackBlurImage.src})`,
          }}
          className="w-full bg-cover bg-center bg-no-repeat py-20"
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            
            {/* Text */}
            <div>
              <h1 className="text-4xl font-semibold text-black dark:text-[#1b2b65] mb-4">
                Call us Today and Let’s Discuss The Need For Mobile Phlebotomy
                Services.
              </h1>

              <p className="text-gray-700 dark:text-[#0a2a50] leading-relaxed">
                PathoConnect is a powerful app suite built for phlebotomists
                and healthcare professionals. Our platform ensures enhanced
                accuracy, streamlined operations, and complete HIPAA
                compliance—so you can focus on delivering better patient care.
                Whether youre looking to reduce manual errors, automate
                routine tasks, or stay current with medical advancements,
                PathoConnect is your all-in-one solution.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={ContactPerson}
                alt="PathoConnect Dashboard"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>

          </div>
        </section>
        <ContactSection/>

        <p className="text-xl font-semibold mt-6 text-center">
          Welcome to Pathoconnect Contact us page
        </p>
      </main>
    </div>
  );
}
