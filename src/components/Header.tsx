"use client";

import Image from "next/image";
import Link from "next/link";
import PathoLogo from "../assets/images/PathoLogo.png";
import Phone from "../assets/images/Phone.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

function CustomItems({
  title,
  items = [],
  route = "",
  pathname,
  mobile = false,
  onClick,
}: {
  title: string;
  items?: { label: string; href: string }[];
  route?: string;
  pathname: string;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const isActive = route && pathname === route;

  if (mobile) {
    return (
      <div className="w-full">
        {route ? (
          <Link
            href={route}
            onClick={onClick}
            className={`block py-2 ${
              isActive ? "text-[#e85c41]" : "text-[#1b2b65]"
            }`}
          >
            {title}
          </Link>
        ) : (
          <>
            <p className="font-semibold text-[#1b2b65] py-2">{title}</p>
            {items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={onClick}
                className="block pl-4 py-1 text-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </>
        )}
      </div>
    );
  }

  // Desktop
  return (
    <div className="relative group cursor-pointer h-full flex items-center">
      {route ? (
        <Link
          href={route}
          className={`hover:text-blue-600 ${
            isActive
              ? "text-[#e85c41] font-semibold"
              : "text-[#1b2b65] font-medium"
          }`}
        >
          {title}
        </Link>
      ) : (
        <span className="hover:text-blue-600 text-[#1b2b65]">{title}</span>
      )}

      {items.length > 0 && (
        <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md min-w-[220px] transition-all duration-200">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100 text-gray-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const productItems = [
  { label: "App", href: "/product/app" },
  { label: "Web", href: "/product/web" },
  { label: "AI", href: "/product/ai" },
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const blogItems = [
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

const integrationItems = [
  { label: "Software Integration", href: "/blog/tech" },
  { label: "Device Integration", href: "/blog/business" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full py-1.5 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-1 h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src={PathoLogo}
            alt="Logo"
            width={180}
            height={40}
            className="w-auto h-8 md:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <CustomItems title="Home" route="/" pathname={pathname} />
          <CustomItems
            title="Product"
            items={productItems}
            pathname={pathname}
          />
          <CustomItems title="About Us" route="/about-us" pathname={pathname} />
          <CustomItems title="Blog" items={blogItems} pathname={pathname} />
          <CustomItems
            title="Integration"
            items={integrationItems}
            pathname={pathname}
          />
          <CustomItems
            title="Contact Us"
            route="/contact-us"
            pathname={pathname}
          />
        </nav>

        {/* Phone Icon (desktop) */}
        <div className="hidden md:block">
          <Image src={Phone} alt="Phone" width={36} height={36} />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl border border-gray-300 w-15  square-full rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bi bi-list text-[#1b2b65] "></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow px-4 py-4 space-y-3">
          <CustomItems
            mobile
            title="Home"
            route="/"
            pathname={pathname}
            onClick={() => setMenuOpen(false)}
          />
          <CustomItems
            mobile
            title="Product"
            items={productItems}
            pathname={pathname}
            onClick={() => setMenuOpen(false)}
          />
          <CustomItems
            mobile
            title="Blog"
            items={blogItems}
            pathname={pathname}
            onClick={() => setMenuOpen(false)}
          />
          <CustomItems
            mobile
            title="Integration"
            items={integrationItems}
            pathname={pathname}
            onClick={() => setMenuOpen(false)}
          />
          <CustomItems
            mobile
            title="Contact Us"
            route="/contact-us"
            pathname={pathname}
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
