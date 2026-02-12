"use client";

import Image from "next/image";
import Link from "next/link";
import PathoLogo from "../assets/images/PathoLogo.png";
import Phone from "../assets/images/Phone.png";
import LogoutImage from "../assets/images/LogoutImage.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

function CustomItems({
  title,
  items = [],
  route = "",
  dummyRoute = "",
  pathname,
  mobile = false,
  onClick,
  selectedItem,
}: {
  title: string;
  items?: { label: string; href: string; slug: string }[];
  route?: string;
  dummyRoute?: string;
  pathname: string;
  mobile?: boolean;
  onClick?: () => void;
  selectedItem?: string;
}) {
 
  const isActive =
    (route && pathname === route) || (dummyRoute && pathname === dummyRoute);

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
        <div className="">
          <span
            className={`hover:text-blue-600 ${
              isActive
                ? "text-[#e85c41] font-semibold"
                : "text-[#1b2b65] font-medium"
            }`}
          >
            {title}
          </span>
          <i
            className={`bi bi-chevron-down  p-2 ${
              isActive
                ? "text-[#e85c41] font-semibold"
                : "text-[#1b2b65] font-medium"
            }`}
          ></i>
        </div>
      )}

      {items.length > 0 && (
        <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md min-w-[220px] transition-all duration-200">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                item.slug === selectedItem
                  ? "text-[#e85c41] font-medium"
                  : "text-[#1b2b65] font-normal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const phoneNumber = [
  {
    label: "USA : +1 (347) 839-1487",
  },
  {
    label: "India : +91 9910272266",
  },
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const productItems = [{ label: "App" }, { label: "Web" }, { label: "AI" }].map(
  (item) => ({
    ...item,
    slug: slugify(item.label),
    href: `/product/${slugify(item.label)}`,
  }),
);

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
  { label: "Software Integration" },
  { label: "Device Integration" },
].map((item) => ({
  ...item,
  slug: slugify(item.label),
  href: `/integration/${slugify(item.label)}`,
}));

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    router.push("/login");
    router.refresh();
  };

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
            dummyRoute={"/product"}
            pathname={`/${pathname.split("/")[1]}`}
            selectedItem={pathname.split("/")[2]}
          />
          <CustomItems title="About Us" route="/about-us" pathname={pathname} />
          <CustomItems
            title="Blog"
            items={blogItems}
            dummyRoute={"/blog"}
            pathname={`/${pathname.split("/")[1]}`}
            selectedItem={pathname.split("/")[2]}
          />
          <CustomItems
            title="Integration"
            dummyRoute="/integration"
            items={integrationItems}
            pathname={`/${pathname.split("/")[1]}`}
            selectedItem={pathname.split("/")[2]}
          />
          <CustomItems
            title="Contact Us"
            route="/contact-us"
            pathname={pathname}
          />
        </nav>

        {/* Phone Icon (desktop) */}
        <div className="relative group cursor-pointer h-full  flex items-center">
          <div className="hidden md:block">
            <Image src={Phone} alt="Phone" width={36} height={36} />
          </div>
          {phoneNumber.length > 0 && (
            <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md min-w-[220px] transition-all duration-200">
              {phoneNumber.map((item, index) => (
                <span
                  key={index}
                  className={`block px-4 py-2 hover:bg-gray-100 ${"text-[#1b2b65] font-normal"}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="hidden md:flex items-center justify-center bg-[#1b2b65] p-2 rounded-full hover:bg-[#162254] transition cursor-pointer"
        >
          <Image src={LogoutImage} alt="logout" width={20} height={20} />
        </button>

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
