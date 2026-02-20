import DeviceIntegration from "@/screens/Integration/DeviceIntegration";
import SoftwareIntegration from "@/screens/Integration/SoftwareIntegration";
import React from "react";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const integrationItems = [
  { label: "Software Integration", page: <SoftwareIntegration /> },
  { label: "Device Integration", page: <DeviceIntegration /> },
].map((item) => ({
  ...item,
  slug: slugify(item.label),
  href: `/integration/${slugify(item.label)}`,
}));

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-white">
      <main className="flex flex-1 flex-col py-20 bg-white dark:bg-white">
        {
          integrationItems.find((item) => item.href === `/integration/${slug}`)
            ?.page
        }
      </main>
    </div>
  );
}
