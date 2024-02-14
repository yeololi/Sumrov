"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-[102px] bg-white bg-opacity-0 text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col p-3 gap-1 w-[102px] bg-opacity-10 bg-white">
                <ListItem href="/docs">ALL</ListItem>
                <ListItem href="/docs/installation">TOP</ListItem>
                <ListItem href="/docs/primitives/typography">BOTTOM</ListItem>
                <ListItem href="/docs/primitives/typography">ACC</ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-[102px] bg-white bg-opacity-0 text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
              Service
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col p-3 gap-1 w-[102px] bg-opacity-10 bg-white">
                <ListItem href="/docs">Notice</ListItem>
                <ListItem href="/docs/installation">Review</ListItem>
                <ListItem href="/docs/primitives/typography">Q&A</ListItem>
                <ListItem href="/docs/primitives/typography">FAQ</ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* <div className="justify-center items-start gap-[70px] inline-flex">
          <div className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
            Shop
          </div>
          <div className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
            Service
          </div>
          <div>
            <span className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
              Cart (
            </span>
            <span className="text-black dark:text-white text-base font-normal font-num">
              0
            </span>
            <span className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
              )
            </span>
          </div>
          <div className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
            Log in
          </div>
        </div> */}
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none rounded-md p-1 space-y-2 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground",
            className
          )}
          href=""
          {...props}
        >
          <p className="text-center line-clamp-2 leading-snug font-nav font-semibold text-sm text-black">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
