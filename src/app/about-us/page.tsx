import AboutPathoconnect from "@/screens/AboutUs/AboutPathoconnect";
import Mission from "@/screens/AboutUs/Mission";
import ReachDetail from "@/screens/AboutUs/ReachDetail";
import WHoAre from "@/screens/AboutUs/WHoAre";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans bg-white">
      <main className="flex flex-1 flex-col pt-22  bg-white dark:bg-white">
        <AboutPathoconnect />
        <ReachDetail />
        <Mission />
        <WHoAre/>
      </main>
    </div>
  );
}
