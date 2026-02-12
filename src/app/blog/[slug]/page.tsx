// app/blog/[slug]/page.tsx

// "use client";

import Blog1 from "@/screens/BlogScreen/Blog1";
import Blog2 from "@/screens/BlogScreen/Blog2";
import Blog3 from "@/screens/BlogScreen/Blog3";
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const blogItems = [
  {
    conponent: <Blog1 />,
    label:
      "Phlebotomy App and Sample Collection Software for Clinical Pathology",
  },
  {
    conponent: <Blog2 />,
    label: "Transform Lab Management with Our Advanced CRM Dashboard",
  },
  {
    conponent: <Blog3 />,
    label: "Online Lab Test Booking Application",
  },
].map((item) => ({
  ...item,
  // slug: slugify(item.label),
  href: `/blog/${slugify(item.label)}`,
}));

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;


  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-white">
      <main className="flex flex-1 flex-col py-20 bg-white dark:bg-white">
        {blogItems.find((item) => item.href === `/blog/${slug}`)?.conponent}
      </main>
    </div>
  );
}
