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
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const datas: {
  title: string;
  items: {
    href: string;
    list: string;
  }[];
}[] = [
  {
    title: "Shop",
    items: [
      { href: "/shop?category=all&page=1", list: "ALL" },
      { href: "/shop?category=top&page=1", list: "TOP" },
      { href: "/shop?category=bottom&page=1", list: "BOTTOM" },
      { href: "/shop?category=acc&page=1", list: "ACC" },
    ],
  },
  {
    title: "Service",
    items: [
      { href: "/notice?page=1", list: "Notice" },
      { href: "/FAQ?page=1", list: "FAQ" },
    ],
  },
];

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <div className="justify-center items-start gap-[50px] flex flex-1">
      {datas.map((args, i) => (
        <NavigationMenu key={i}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-[102px] bg-white bg-opacity-0 text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
                {args.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-3 gap-1 w-[102px] bg-opacity-10 bg-white">
                  {args.items.map((arg, j) => (
                    <ListItem key={j} href={arg.href}>
                      {arg.list}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
      <Button
        variant={"ghost"}
        className="flex items-center justify-center hover:bg-opacity-0 hover:bg-white"
        asChild
      >
        <Link href={"/cart"}>
          <span className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
            Cart (
          </span>
          <span className="text-black dark:text-white text-base font-normal font-num">
            0
          </span>
          <span className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap">
            )
          </span>
        </Link>
      </Button>
      {session ? (
        <Button
          variant={"ghost"}
          className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap hover:bg-opacity-0 hover:bg-white"
        >
          <Link href={"/mypage"}>My Page</Link>
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          className="text-black dark:text-white text-xl font-bold font-nav whitespace-nowrap hover:bg-opacity-0 hover:bg-white"
        >
          <Link href={"/login"}>Log in</Link>
        </Button>
      )}
    </div>
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
          <p className="text-center line-clamp-2 leading-snug font-nav font-semibold text-sm text-black dark:text-white">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
