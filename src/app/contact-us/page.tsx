
import Section1 from "@/screens/ContactUs/Section1";
import ContactSection from "../../screens/ContactUs/ContactSection";

export default function ContactUs() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans ">
      <main className="flex flex-1 flex-col py-20 bg-white ">
        <Section1/>
        <ContactSection/>
      </main>
    </div>
  );
}
