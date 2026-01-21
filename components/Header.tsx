"use client";

import Image from "next/image";
import Link from "next/link";
import PathoLogo from "../assets/images/PathoLogo.png";
import Phone from "../assets/images/Phone.png";
import { usePathname } from "next/navigation";

export function CustomItems({
  title,
  items = [],
  route = "",
  pathname,
}: {
  title: string;
  items?: { label: string; href: string }[];
  route?: string;
  pathname: string;
}) {
  const isActive = route && pathname === route;

  return (
    <div className="relative group cursor-pointer h-full bg-white items-center flex">
      {route ? (
        <Link
          href={route}
        //   target="_blank"
          className={`hover:text-blue-600 ${
            isActive ? "text-[#e85c41] font-semibold" : ""
          }`}
        >
          {title}
        </Link>
      ) : (
        <span className="hover:text-blue-600">{title}</span>
      )}

      <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md min-w-[180px] transition-all duration-200">
        {items &&
          items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
      </div>
    </div>
  );
}

const productItems = [
  { label: "App", href: "/product/app" },
  { label: "Web", href: "/product/web" },
  { label: "AI", href: "/product/ai" },
];

const aboutItems = [
  { label: "Company", href: "/about/company" },
  { label: "Team", href: "/about/team" },
  { label: "Careers", href: "/about/career" },
];

const blogItems = [
  {
    label:
      "Phlebotomy App and Sample Collection Software for Clinical Pathology",
    href: "/blog/tech",
  },
  {
    label: "Transform Lab Management with Our Advanced CRM Dashboard",
    href: "/blog/business",
  },
  { label: "Online Lab Test Booking Application", href: "/blog/design" },
];
const integrationItems = [
  { label: "Software Integration", href: "/blog/tech" },
  { label: "Device Integration", href: "/blog/business" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 py-0 ">
        {/* Logo */}
        <Link href="/">
          <Image src={PathoLogo} alt="Logo" width={180} height={50} />
        </Link>

        {/* Menu */}
        <nav className="flex gap-8 text-gray-800 h-full items-center font-medium">
          {/* Home */}
          <CustomItems title="Home" route="/" pathname={pathname} />
          <CustomItems
            title="Product"
            items={productItems}
            pathname={pathname}
          />
          <CustomItems title="About Us" pathname={pathname} />
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
        <Link href="/">
          <Image src={Phone} alt="Logo" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
}
