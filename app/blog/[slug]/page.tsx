// app/blog/[slug]/page.tsx

import Blog1 from "@/screens/BlogScreen/Blog1";

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 flex-col py-20 bg-white dark:bg-black">
        <Blog1 />
      </main>
    </div>
  );
}
