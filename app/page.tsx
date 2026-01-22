
"use client";

import "bootstrap-icons/font/bootstrap-icons.css";

import { BannerSection } from "@/screens/Homescreen/BannerSection";
import { FaqSection } from "@/screens/Homescreen/FaqSection";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans bg-white">
      <main className="flex flex-1 flex-col pt-22  bg-white dark:bg-white">
        <BannerSection />
        <FaqSection />

   
      </main>
    </div>
  );
}
