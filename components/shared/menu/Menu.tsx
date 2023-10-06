"use client";

import { sidebarLinks } from "@/constants/index";
import Link from "@/node_modules/next/link";
import React from "react";
import { usePathname } from "@/node_modules/next/navigation";
import Image from "@/node_modules/next/image";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          // TODO

          return (
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
              key={item.route}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      {/* SIGNED OUT functionality */}
    </div>
  );
};

export default Menu;
