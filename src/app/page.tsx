import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import { redirect } from "next/navigation";
import { BannerSection } from "@/screens/Homescreen/BannerSection";
import { FaqSection } from "@/screens/Homescreen/FaqSection";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  // ✅ 1. No cookie → go to login
  if (!token) {
    redirect("/login");
  }

  // ✅ 2. Verify token
  const session = await decrypt(token);

  // ✅ 3. Invalid token → go to login
  if (!session?.userId) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans bg-white">
      <main className="flex flex-1 flex-col pt-22  bg-white dark:bg-white">
        <BannerSection />
        <FaqSection />

   
      </main>
    </div>
  );
}
