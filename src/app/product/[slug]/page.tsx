import React from "react";

export async function page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-white">
      <main className="flex flex-1 flex-col py-20 bg-white dark:bg-white"></main>
    </div>
  );
}

export default page;
