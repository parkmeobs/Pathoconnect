import RealTime from "@/assets/images/HomeScreenTab/RealTime.png";

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const productItems = [
  {
    label: "Order Booking application",
    description:
      "Book online blood tests from the comfort of your home with our Healthcare App.",
    color: ["#fff1ef", "#ff6b4a"],
    icon: RealTime,
  },
  {
    label: "Phlebotomy Application",
    description:
      "Simplify phlebotomy workflows with our intuitive app in just a few taps.",
    color: ["#f0f7ff", "#1b67b1"],
    icon: RealTime,
  },
  {
    label: "Rider application",
    description:
      "Optimize your on-demand samples deliveries with a custom Rider App.",
    color: ["#f3f0ff", "#9747ff"],
    icon: RealTime,
  },
  {
    label: "CRM Dashboard",
    description:
      "CRM Tailored to Your Needs—manage all your orders and gain a 360-degree view.",
    color: ["#f0fff4", "#1bb125"],
    icon: RealTime,
  },
].map((item) => ({
  ...item,
  slug: slugify(item.label),
  href: `/product/${slugify(item.label)}`,
}));

export const blogItems = [
  {
    label:
      "Phlebotomy App and Sample Collection Software for Clinical Pathology",
  },
  {
    label: "Transform Lab Management with Our Advanced CRM Dashboard",
  },
  {
    label: "Online Lab Test Booking Application",
  },
].map((item) => ({
  ...item,
  slug: slugify(item.label),
  href: `/blog/${slugify(item.label)}`,
}));

export const integrationItems = [
  { label: "Software Integration" },
  { label: "Device Integration" },
].map((item) => ({
  ...item,
  slug: slugify(item.label),
  href: `/integration/${slugify(item.label)}`,
}));