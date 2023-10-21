"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "@/node_modules/next/link";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@/node_modules/@clerk/nextjs/dist/types/components.server";
import { sidebarLinks } from "@/constants/index";
import { usePathname } from "@/node_modules/next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 rounded-lg bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="invert-colors"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevStack"
          />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Dev<span className="text-primary-500">Stack</span>
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          {/* removed signed out content */}
          {/* <SignedOut>
            <div>
              <SheetClose>
                <Link>
                  <Button>
                    <span>log in</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
