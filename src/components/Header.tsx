"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PathoLogo from "../assets/images/PathoLogo.png";
import Phone from "../assets/images/Phone.png";
import LogoutImage from "../assets/images/LogoutImage.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RealTime from "@/assets/images/HomeScreenTab/RealTime.png";
import {
  blogItems,
  integrationItems,
  productItems,
} from "@/utils/CommonFunction/CommanData";
import { AnyObject } from "mongoose";

function CustomItems({
  title,
  items = [],
  route = "",
  dummyRoute = "",
  pathname,
  mobile = false,
  onClick,
  selectedItem,
}: AnyObject) {
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
            {items.map((item: { label: string; href: string }, i: number) => (
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
    <div
      className={`group cursor-pointer  h-full flex items-center ${title === "Product" ? "" : "relative"}`}
    >
      {route ? (
        <Link
          href={route}
          className={`hover:text-blue-600 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] whitespace-nowrap
    ${isActive ? "text-[#e85c41] font-semibold" : "text-[#1b2b65] font-[600]"}`}
        >
          {title}
        </Link>
      ) : (
        <div className="whitespace-nowrap flex items-center">
          <span
            className={`hover:text-blue-600 text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] ${
              isActive
                ? "text-[#e85c41] font-semibold"
                : "text-[#1b2b65] font-[600]"
            }`}
          >
            {title}
          </span>

          <i
            className={`bi bi-chevron-down hidden lg:block ml-1 ${
              isActive ? "text-[#e85c41]" : "text-[#1b2b65]"
            }`}
          ></i>
        </div>
      )}

      {title === "Product" ? (
        <div className="w-full   py-8 left-0 bg-white absolute top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100  shadow-lg rounded-md  transition-all duration-200">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4  px-5 ">
            {items.map(
              (
                item: {
                  label: string;
                  icon: string;
                  color: [string, string];
                  description: string;
                  href: string;
                },
                i: number,
              ) => (
                <div
                  key={i}
                  className="group w-full h-full border rounded-md flex px-6 py-8"
                  style={{
                    backgroundColor: item?.color[0],
                    borderColor: `${item?.color[1]}80`,
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    className="inline-block  w-auto h-10"
                  />

                  <div>
                    <div className="h-2/3">
                      <h1 className="text-md font-semibold text-blue px-4 py-2">
                        {item.label}
                      </h1>
                      <p className="max-w-3xl text-sm text-gray-500 px-4">
                        {item?.description}
                      </p>
                    </div>

                    <Link
                      href={item.href}
                      style={{
                        borderColor: item?.color[1],
                        color: item?.color[1],
                      }}
                      className="ml-4 text-sm rounded-full px-5 py-1 mt-4 transition border-2 inline-flex items-center group-hover:visible group-hover:opacity-100"
                    >
                      Know More
                      <i className="bi bi-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      ) : (
        items.length > 0 && (
          <div className="absolute left-0 top-full mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md min-w-[220px] transition-all duration-200">
            {items.map(
              (
                item: {
                  label: string;
                  href: string;
                  slug?: string;
                },
                index: number,
              ) => (
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
              ),
            )}
          </div>
        )
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
      <div className="max-w-7xl mx-auto sm:px-10 md:px-12 gap-4 flex items-center justify-between  h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src={PathoLogo}
            alt="Logo"
            // width={180}
            // height={40}
            className="w-auto h-5 sm:h-8 md:h-9 lg:h-12 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 sm:gap-6 md:gap-6 lg:gap-10 items-center">
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
          className="md:hidden text-3xl  w-15  square-full rounded"
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
